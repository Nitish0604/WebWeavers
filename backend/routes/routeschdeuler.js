const express = require("express");
const schedulerController = require("../controllers/scheduler");

const router = express.Router();

router.post("/api/schedule-pickup", async (req, res) => {
  const { pincode, pickupTime } = req.body;
  let scheduler;
  // Validate the request
  if (!pincode || !pickupTime) {
    res.status(400).json({ error: "Invalid request." });
    return;
  }
  

 try {
    scheduler = await schedulerController.schedulePickup(
     pincode,
     pickupTime
   );
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
