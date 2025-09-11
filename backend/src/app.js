// here we create the server and export it
// then we are exporting server

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/auth-routes.js';
import foodRouter from './routes/food-routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.get('/', (req, res) => {
    res.json({
        msg: "hello"
    })
});

app.use('/api/auth', router);
app.use('/api/food', foodRouter);

export default app;