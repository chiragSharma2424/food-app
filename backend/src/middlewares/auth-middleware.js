import foodPartnerModel from "../models/foodpartner-model.js";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const authFoodPartnerMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            msg: "Please login first || unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch(err) {
        console.log(`error in middleware ${err}`);
    }
}