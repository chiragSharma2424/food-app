import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

function connectDB() {
    mongoose.connect(process.env.mongodb_uri).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((err) => {
        console.log(`error in connecting database ${err}`);
    })
}

export default connectDB;