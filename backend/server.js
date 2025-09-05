// here we start the server

import app from "./src/app.js";
import connectDB from "./src/db/db.js";


app.get('/', (req, res) => {
    res.json({
        msg: "hello from server"
    })
});

connectDB();

app.listen(3000, () => {
    console.log(`server is running on port 3000`)
});