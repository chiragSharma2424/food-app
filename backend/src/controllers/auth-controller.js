import userModel from "../models/user-model.js";

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
}

export default registerUser;