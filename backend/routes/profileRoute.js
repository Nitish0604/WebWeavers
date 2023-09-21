const express = require("express");
const router = express.Router();
const {updateProfile} = require("../controllers/profile")
const { protect } = require("../middleware/authMiddleware");

router.put("/updateProfile", protect, updateProfile);
















module.exports = router;
