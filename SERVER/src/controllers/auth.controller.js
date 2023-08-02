import User from '../models/user.models.js'
import bcrypt from 'bcryptjs' 
import { createAccessToken } from '../libs/jwt.js';
import { requiredAuth } from '../midlewares/tokenValidation.js';

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
    const {email, password} = req.body;
       try {
           const userFound = await User.findOne({email});
           if(!userFound) return res.status(400).json({message:'User not found'});

           const isMacth = await bcrypt.compare(password, userFound.password);
           if(!isMacth) return res.status(400).json({message: 'Error in credencials'});
         
           const token = await createAccessToken({id:userFound._id})
           res.cookie('token', token)
           res.status(201).json({
           id:userFound._id,
           username:userFound.username,
           email:userFound.email
          })

       } catch (error) {
           res.status(500).json({message: error.message});
       }
   // console.log('registrando')
}

export const logout=(req, res)=>{
    res.cookie('token', '',{
        expire : new Date(0),
    });
    return res.sendStatus(200);
}

export const profile=async(req, res)=>{
    
    const userFound = await User.findById(req.user.id);
    if(!userFound) res.status(400).json({message:'User not found'})

    res.status(201).json({
        id:userFound._id,
        username:userFound.username,
        email:userFound.email
       });

}


// export const login= async (req, res)=>{
//     //  const {username, email, password} = req.body;
//     console.log('loguendo')
// }