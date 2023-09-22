const mongoose = require("mongoose");

const SchedulerSchema = new mongoose.Schema({
  pincode: {
    type: String,
    required: true,
  },
  pickups: [
    {
      type: Date,
      required: true,
    },
  ],
});

const Scheduler = mongoose.model("Scheduler", SchedulerSchema);

module.exports = Scheduler;
