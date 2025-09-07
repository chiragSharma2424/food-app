import foodPartnerModel from "../models/foodpartner-model.js";
import userModel from "../models/user-model.js";
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

        const foodPartner = await foodPartnerModel.findById(decoded.id);

        req.foodPartner = foodPartner;

        next();
    } catch(err) {
        console.log(`error in middleware ${err}`);
        
        return res.status(401).json({
            msg: "Invalid token"
        });
    }
}


// user middleware
async function userMiddleware(req, res, next) {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({
            msg: "Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id);
        req.user = user
        next();

    } catch(err) {
        console.log(`error in user middleware ${err}`);

        return res.status(401).json({
            msg: "Invalid token"
        })
    }
}

export {
    authFoodPartnerMiddleware,
    userMiddleware
}