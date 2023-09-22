const Scheduler = require("../models/schdeuler");

const schedulePickup = async (pincode, pickupTime) => {

  // Check if the maximum number of pickups for the pincode on the given day has been reached
  let scheduler = await Scheduler.findOne({ pincode });
  if (scheduler && scheduler.pickups.length >= 4) {
    // Schedule the pickup on the next day
    pickupTime = Date.now()+1;
  }

  // Create a new scheduler or update the existing one
  if (!scheduler) {
    scheduler = new Scheduler({ pincode });
  }
  scheduler.pickups.push(pickupTime);
  await scheduler.save();

  return scheduler;
};

const getSchedule = async () => {
  let schedulers = await Scheduler.find();
  return schedulers;
};

module.exports = {
  schedulePickup,
  getSchedule,
};
