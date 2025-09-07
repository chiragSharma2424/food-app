import foodModel from "../models/food-model.js";
import { uploadFile } from "../services/storage-services.js";
import { v4 as uuid } from 'uuid';



async function createFood(req, res) {
    console.log(req.foodPartner);

    console.log(req.body);

    console.log(req.file);

    const fileUploadResult = await uploadFile(req.file.buffer, uuid());

    // console.log(fileUploadResult);

    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    return res.status(201).json({
        msg: "Food created successfully",
        food: foodItem
    });
}



async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({

    });

    return res.status(200).json({
        msg: "Food Items fetched successfully",
        foodItems
    })
}

export { createFood, getFoodItems }