// here we create the server and export it

import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: "hello"
    })
});

export default app;