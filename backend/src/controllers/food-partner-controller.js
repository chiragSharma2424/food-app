import foodPartnerModel from "../models/foodpartner-model.js";
import mongoose from "mongoose";

async function getFoodPartnId(req, res) {
  const foodPartnerId = req.params.id;

  // Check if id is provided
  if (!foodPartnerId) {
    return res.status(400).json({ msg: "Food partner ID is required" });
  }

  // Check if id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(foodPartnerId)) {
    return res.status(400).json({ msg: "Invalid Food partner ID" });
  }

  try {
    const foodPartner = await foodPartnerModel.findById(foodPartnerId);

    if (!foodPartner) {
      return res.status(404).json({ msg: "Food partner not found" });
    }

    return res.status(200).json({
      msg: "Food partner retrieved successfully",
      foodPartner,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
}

export default getFoodPartnId;
