
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
  });

  if (user) {
    res.status(201).json({
      user,
      token: generateToken(user._id, user.name, user.email),
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

      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({
      message:"invalid username and pasword"
    })
   
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

module.exports = {  registerUser, authUser , allUsers };
