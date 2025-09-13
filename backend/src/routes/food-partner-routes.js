import express from 'express';
import { userMiddleware } from '../middlewares/auth-middleware.js';
import getFoodPartnId from '../controllers/food-partner-controller.js';
const router = express.Router();

router.get('/:id', userMiddleware, getFoodPartnId);

export default router;