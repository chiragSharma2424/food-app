import userModel from "../models/user-model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const mysecretkey = 'secret-key-24'

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
    }, mysecretkey);

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
    
}

export { registerUser, }