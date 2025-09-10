import userModel from "../models/user-model.js";
import foodPartnerModel from "../models/foodpartner-model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

async function registerUser(req, res) {
    const { fullName, email, password } = req.body;
    
    if(!fullName || !email || !password) {
        return res.status(400).json({
            msg: "All fields are required"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        email
    });

    if(isUserAlreadyExists) {
        return res.status(400).json({
            msg: "user already exists"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName: fullName,
        email: email,
        password: hashPassword
    });

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    return res.status(201).json({
        msg: "user registered successfully",
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    })
}



async function loginUser(req, res) {
    const { email, password } = req.body;

    const userExists = await userModel.findOne({
        email
    });

    if(!userExists) {
        return res.status(400).json({
            msg: "user not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, userExists.password);

    if(!isPasswordValid) {
        return res.status(400).json({
            msg: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: userExists._id
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    return res.status(200).json({
        msg: "user loggedin successfully",
        user: {
            id: userExists._id,
            email: userExists.email,
            fullName: userExists.fullName
        }
    });
}


function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        msg: "user logout successfully"
    });
}



// controllers for food partner

// food partner register

async function registerFoodPartner(req, res) {
    const { name, email, password, phone, address, contactName } = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({
            msg: "All fields are required"
        })
    }

    const accountAlreadyExists = await foodPartnerModel.findOne({ email });

    if(accountAlreadyExists) {
        return res.status(400).json({
            msg: "Food partner account already exists"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
        name: name,
        email: email,
        password: hashPassword,
        phone: phone,
        address: address,
        contactName: contactName
    });

    const token = jwt.sign({
        id: foodPartner._id
    }, process.env.JWT_SECRET);

    // setting token in cookie
    res.cookie('token', token);

    return res.status(201).json({
        msg: "Food partner registered successfully",
        foodPartner: {
            id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name,
            phone: phone,
            contactName: contactName,
            address: address
        }
    })
}


// food partner login

async function loginFoodPartner(req, res) {
    const { email, password } = req.body;

    const foodPartner = await foodPartnerModel.findOne({ email });

    if(!foodPartner) {
        return res.status(400).json({
            msg: "invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if(!isPasswordValid) {
        return res.status(400).json({
            msg: "invalid password"
        })
    }

    const token = jwt.sign({
        id: foodPartner._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        msg: "food partner logged in successfully",
        foodPartnerModel: {
            id: foodPartner._id,
            name: foodPartner.name,
            email: foodPartner.email
        }
    })
}

function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        msg: "Food partner logged out successfully"
    });
}

export { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner }