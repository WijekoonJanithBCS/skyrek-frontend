import express from 'express';

import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';



let mongoURI="mongodb+srv://admin:1234@cluster0.aenbzug.mongodb.net/?appName=Cluster0";
mongoose.connect(mongoURI)
.then(() => {
    console.log('MongoDB connected successfully'); 
})
.catch((err) => {
    console.log('MongoDB connection error:', err);
});     



const app = express();

app.use(express.json());

app.use('/users', userRouter);



function start() {
    console.log('Starting server on port 3000');
}
app.listen(3000, start);


