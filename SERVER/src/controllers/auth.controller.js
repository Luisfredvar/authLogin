import User from '../models/user.models.js'
import bcrypt from 'bcryptjs' 
import { createAccessToken } from '../libs/jwt.js';

export const register= async (req, res)=>{
     const {username, email, password} = req.body;
        try {
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new User({
                username,
                email,
                password: passwordHash
            
            });
            console.log(newUser);
            const userSaved = await newUser.save();
            const token = await createAccessToken({id:userSaved._id})
            res.cookie('token', token)
            res.status(201).json({
            id:userSaved._id,
            username:userSaved.username,
            email:userSaved.email
           })

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    // console.log('registrando')
}

export const login= async (req, res)=>{
    //  const {username, email, password} = req.body;
    console.log('loguendo')
}