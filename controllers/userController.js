import user from '../models/user.js';

function createUser (req, res) {
    const User = new user(
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
        }
    ); 
    User.save().then(()=>{
        res.status(201).send({message: 'User created successfully'});
    }).catch((error)=>{
        res.status(500).send({message: 'Error creating user', error: error.message});
    });
}