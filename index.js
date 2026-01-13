import express from 'express';

import mongoose from 'mongoose';

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
        console.log('Post requested received..');
        //console.log(req.body);
        res.json(
            {
                message: 'Data received successfully',
            }
        );
    }  );

app.put('/', 
    () => {
        console.log('Put requested received..');
    }  );

app.listen(3000, 
() => {
    console.log('Server is running on port 3000 .. ');
});



