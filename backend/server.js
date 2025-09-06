// here we start the server

import app from "./src/app.js";
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./src/db/db.js";


connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server is running on port 3000`);
});