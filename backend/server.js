// here we start the server

import app from "./src/app.js";


app.get('/', (req, res) => {
    res.json({
        msg: "hello from server"
    })
})

app.listen(300, () => {
    console.log(`server is running on port 3000`)
});