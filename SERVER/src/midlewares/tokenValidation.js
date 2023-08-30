import jwt from 'jsonwebtoken';
import { SECRET_TOKEN } from '../../config.js';


export const requiredAuth = (req, res, next)=>{
    const {token} = req.cookies;

    if(!token) return res.status(401).json({message:'No token. Authorization denied'});

     jwt.verify(token, SECRET_TOKEN, (err, user)=>{
        if(err) res.status(403).json({message: 'Invalid Token'})

        req.user = user;

        next();
     })
}