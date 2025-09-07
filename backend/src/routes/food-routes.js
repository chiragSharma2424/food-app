import express from 'express';
import multer from 'multer';
import { createFood } from '../controllers/food-controller.js';
import { authFoodPartnerMiddleware } from '../middlewares/auth-middleware.js';
const foodRouter = express.Router();

// express server cant read any type of file wihch are coming from frontend
// like img, pdf, video, that's why we need a package called multer it will
// read the files

const upload = multer({
    storage: multer.memoryStorage(),
})

// this api is for creating food item, food item is only be created by food-partner
// normal user can create this food item so it should be protected
// /api/food/

foodRouter.post('/', authFoodPartnerMiddleware, upload.single("video"), createFood);

export default foodRouter;