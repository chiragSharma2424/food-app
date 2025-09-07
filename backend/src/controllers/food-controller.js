import foodModel from "../models/food-model.js";
import { uploadFile } from "../services/storage-services.js";
import { v4 as uuidv4 } from 'uuid';


async function createFood(req, res) {
    console.log(req.foodPartner);

    console.log(req.body);

    console.log(req.file);

    const fileUploadResult = await uploadFile(req.file.buffer, )

    res.send("food item created");
}

export { createFood }