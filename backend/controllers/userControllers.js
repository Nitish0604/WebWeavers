const User = require("../models/User");
const generateToken = require("../config/generateToken");
const Profile = require("../models/Profile");
const Metals = require("../models/Metals");

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  let account_type = "user";

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "User already exists. Please sign in to continue.",
    });
  }
  const metalsExtracted = await Metals.create({
    gold: "",
    silver: "",
    iron: "",
    other: "",
  });

  const profileDetails = await Profile.create({
    dateOfBirth: "",
    contactNumber: "",
    gender: "",
  });
  const user = await User.create({
    name,
    email,
    password,
    pic,
    additionalDetails: profileDetails._id,
    metalsExtracted: metalsExtracted._id,
    account_type,
  });

  if (user) {
    res.status(201).json({
      user,
      token: generateToken(user._id, user.name, user.account_type),
      message: "User registered successfully",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      credits: user.credits,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({
      message: "invalid username and pasword",
    });
  }
};
const allUsers = async (req, res) => {
  const keyword = req.query.search
    ? {
      $or: [
        { name: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } },
      ],
    }
    : {};

  const users = await User.find(keyword);
  res.send(users);
};
const pushFormData = async (req, res) => {
  try {
    let id = req.params.userId;

    console.log(id)
    const { gold, silver, others, copper } = req.body;
    const userDetails = await User.findById(id);
    //console.log(userDetails)
    ///console.log(userDetails.metalsExtracted);
    const metals = await Metals.findByIdAndUpdate(
      userDetails.metalsExtracted,
      {
        gold,
        silver,
        others,
        copper,
      },
      {
        new: true,
      }
    );
    const credits = ((gold * 5.278) + (silver * 74.5) + (copper * 0.727) + (others * 0.5)) / 10;
    // console.log(credits);
    // userDetails.credits = credits;
    // console.log(userDetails.credits);

    if (!metals) {
      return res.status(404).json({
        success: false,
        error: " Metals not found",
      });
    }

    // Update the user object with the new profile information
    const user = await User.findByIdAndUpdate(id, {
      metalsExtracted: metals._id,
      credits: credits
    });
    const updatedUserDetails = await User.findById(id)
      .populate("metalsExtracted")
      .populate("additionalDetails")
      .populate("credits")
      .exec();
    return res.json({
      success: true,
      message: "facility updated successfully",

      updatedUserDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { registerUser, authUser, allUsers, pushFormData };

// Replace this with your data storage or API logic

// Controller function to push form data using user ID
