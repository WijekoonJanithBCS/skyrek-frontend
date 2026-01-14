import Student from '../models/student.js';



export function getAllStudents(req, res)  {
    Student.find()
    .then(students => {
        res.json(students); 
    }
    );
}

export function createStudents(req, res)  {
    const newStudent = new Student({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
    });
    newStudent.save()
    .then(student => {
        
        res.json({message: 'Student created successfully'});
    });
    
}