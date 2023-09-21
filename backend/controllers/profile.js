const Profile = require("../models/Profile");
const mongoose = require("mongoose");
const User = require("../models/User");

exports.updateProfile = async (req, res) => {
  try {
    const { Name, dateOfBirth, contactNumber, gender } = req.body;
    const id = req.user.id;

    // Find the profile by id
    const userDetails = await User.findById(id);

    // Find the profile by id
    const profile = await Profile.findByIdAndUpdate(
      userDetails.additionalDetails,
      {
        dateOfBirth,
        contactNumber,
        gender,
      },
      {
        new: true,
      }
    );

    // Check if the profile exists
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: "Profile not found",
      });
    }

    // Update the user object with the new profile information
    const user = await User.findByIdAndUpdate(id, {
      additionalDetails: profile._id,
    });

    // Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.json({
      success: true,
      message: "Profile updated successfully",
     
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
