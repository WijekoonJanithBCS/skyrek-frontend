import express from 'express';
const studentRouter = express.Router();
import Student from '../models/student.js'; 

studentRouter.get('/',(req, res) => {
    Student.find()
    .then(students => {
        res.json(students); 
    });

studentRouter.post('/',(req, res) => {
    const newStudent = new Student({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
    });
    newStudent.save()
    .then(student => {
        
        res.json({message: 'Student created successfully'});
    });
    
});
    
});
export default studentRouter;   