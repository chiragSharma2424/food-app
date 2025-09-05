// here we create the server and export it

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        msg: "hello"
    })
});

export default app;