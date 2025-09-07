import express from 'express';
import multer from 'multer';
import { createFood, getFoodItems } from '../controllers/food-controller.js';
import { authFoodPartnerMiddleware, userMiddleware } from '../middlewares/auth-middleware.js';
const foodRouter = express.Router();

// express server cant read any type of file wihch are coming from frontend
// like img, pdf, video, that's why we need a package called multer it will
// read the files


// we cant not store files in server we have to store in cloud storage 
// provider like cloudinary, imgaekit
// how image kit will work
// it will store files for us like videos, images, pdf
// and for that video it will give us that url of that video or file


const upload = multer({
    storage: multer.memoryStorage(),
});


// this api is for creating food item, food item is only be created by food-partner
// normal user can create this food item so it should be protected
// /api/food/

foodRouter.post('/', authFoodPartnerMiddleware, upload.single("video"), createFood);
foodRouter.get('/', userMiddleware, getFoodItems);

export default foodRouter;