import express from 'express';
import { createFood } from '../controllers/food-controller.js';
import { authFoodPartnerMiddleware } from '../middlewares/auth-middleware.js';
const foodRouter = express.Router();

// this api is for creating food item, food item is only be created by food-partner
// normal user can create this food item so it should be protected

foodRouter.post('/', authFoodPartnerMiddleware, createFood);

export default foodRouter;