const express = require("express");
const schedulerController = require("../controllers/scheduler");
const mailSender = require("../util/mailSender");
const {
  pickupScheduledEmail,
} = require("../mail/templates/pickupScheduledEmail");
const {
  pickupFacilityEmail,
} = require("../mail/templates/pickupFacilityEmail");
const User = require("../models/User");
const router = express.Router();

router.post("/api/schedule-pickup", async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    pincode,
    landmark,
    phoneno,
    pickupTime,
  } = req.body;

  // Validate the request
  if (
    !pincode ||
    !pickupTime ||
    !firstName ||
    !lastName ||
    !landmark ||
    !phoneno ||
    !address
  ) {
    res.status(400).json({ error: "Invalid request." });
    return;
  }

  try {
    scheduler = await schedulerController.schedulePickup(pincode, pickupTime);
    try {
      const id = "650e890b4fcfaa7603d43fbc";
      console.log(id);
      // Find the profile by id
      const userDetails = await User.findById(id);
      let scheduler;
      console.log(userDetails);
      const email = userDetails.email;
      const name = userDetails.name;
      await mailSender(
        email,
        `Pickup Scheduled`,
        pickupScheduledEmail(
          `${name}`,
          // ${device}
          `${pickupTime}`
        )
      );
      // }
      // catch (error) {
      //   console.log("error in sending mail", error)
      //   return res
      //     .status(400)
      //     .json({ success: false, message: "Could not send email" })
      // }
      // try {
      const fid = "650e8a96aa08043c1fda680e";
      console.log(fid);
      // Find the profile by id
      const facilityDetails = await User.findById(fid);
      console.log(facilityDetails);
      const femail = facilityDetails.email;
      const fname = facilityDetails.name;
      await mailSender(
        femail,
        `Pickup Scheduled`,
        pickupFacilityEmail(
          `${fname}`,
          `${name}`,
          `${pickupTime}`,
          `${address}`,
          `${pincode}`,
          `${landmark}`
        )
      );
    } catch (error) {
      console.log("error in sending mail", error);
      return res
        .status(400)
        .json({ success: false, message: "Could not send email" });
    }
    res.status(201).json(scheduler);
  } catch (error) {
    // Handle the error
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/api/schedule", async (req, res) => {
  try {
    const schedule = await schedulerController.getSchedule();
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
