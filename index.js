import express from 'express';

import mongoose from 'mongoose';
import Student from './models/student.js';

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


app.get('/', 
    () => {
        console.log('Get requested received..');
    }  );

app.post('/', 
    (req,res) => {
       const student = new Student({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
       });
       student.save();
    } );
    

app.put('/', 
    () => {
        console.log('Put requested received..');
    }  );

app.listen(3000, 
() => {
    console.log('Server is running on port 3000 .. ');
});



