const express = require("express");
const {
  registerFacility,
  authFacility,
 
} = require("../controllers/facilityController");
//const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerFacility);
router.post("/login", authFacility);
//router.get("/allusers", allUsers);

module.exports = router;
