import express from 'express';
const studentRouter = express.Router();
import Student from '../models/student.js'; 
import { get } from 'mongoose';
import { createStudents,getAllStudents } from '../controllers/studentController.js';

studentRouter.get('/',getAllStudents);

studentRouter.post('/',createStudents);
    

export default studentRouter;   