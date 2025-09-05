import mongoose from "mongoose";

function connectDB() {
    mongoose.connect('mongodb://localhost:27017/food').then(() => {
        console.log("MongoDB connected successfully");
    }).catch((err) => {
        console.log(`error in connecting database ${err}`);
    })
}

export default connectDB;