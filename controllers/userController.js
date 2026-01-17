import user from '../models/user.js';
import bcrypt from 'bcryptjs';


export function createUser (req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const User = new user(
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
        }
    ); 
    User.save().then(()=>{
        res.status(201).send({message: 'User created successfully'});
    }).catch((error)=>{
        res.status(500).send({message: 'Error creating user', error: error.message});
    });
}
export function loginUser(req, res) {
    console.log("Login request received");
}


        