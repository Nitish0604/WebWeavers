const generateToken = require("../config/generateToken");
const Facility = require("../models/Facility");
const Metals = require("../models/Metals");

const registerFacility = async (req, res) => {
  const { name, facilityID,  address, contact ,password } = req.body;

  if (!name || !facilityID  || !address || !contact) {
    res.status(400);
    throw new Error("Please Enter all Fields");
  }
    let account_type = "facility";
  const facilityExists = await Facility.findOne({ facilityID });

  if (facilityExists) {
    return res.status(400).json({
      success: false,
      message: "Facility already registered",
    });
  }
  const metalsExtracted = await Metals.create({
    gold: "",
    silver: "",
    iron: "",
    other: "",
  });
  const facility = await Facility.create({
    name,
    facilityID,
    address,
    metalsExtracted: metalsExtracted._id,
    account_type,
  });
  if (facility) {
    res.status(201).json({
      facility,
      token: generateToken(facility._id, facility.name, facility.account_type),
      message: "Facility registered Successfully",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Facility can't be Registered, Please try Again later",
    });
  }
};

const authFacility = async (req, res) => {
  const { facilityID, password } = req.body;

  const facility = await Facility.findOne({ facilityID });

  if (facility && (await Facility.matchPassword(password))) {
    res.json({
      _id: facility._id,
      name: facility.name,
      facilityID: facility.facilityID,
      address: facility.address,
      contact: facility.contact,
      token: generateToken(facility._id),
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid ID or Password",
    });
  }
};

module.exports = { registerFacility, authFacility };
