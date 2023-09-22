const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  pushFormData,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/allusers", allUsers);
router.post("/pushform/:userId", pushFormData);

module.exports = router;
