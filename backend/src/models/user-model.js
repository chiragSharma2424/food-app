import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, unique: true, required: true, trim: true},
    password: {type: String}
}, { timestamps: true });

const userModel = mongoose.model('user', userSchema);
export default userModel;