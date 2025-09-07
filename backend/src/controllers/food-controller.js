import foodModel from "../models/food-model.js";
import { uploadFile } from "../services/storage-services.js";
import { v4 as uuid } from 'uuid';



async function createFood(req, res) {
    console.log(req.foodPartner);

    console.log(req.body);

    console.log(req.file);

    const fileUploadResult = await uploadFile(req.file.buffer, uuid());

    console.log(fileUploadResult);

    res.send("food item created, imagekit");
}

export { createFood }