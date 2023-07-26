import User from ('../models/userModel')

export const register= async (req, res)=>{
     const {username, email, password} = req.body;
        try {
            const newUser = new User({
                username,
                email,
                password
            });
            console.log(newUser);
            const userSaved = await newUser.save();
            res.json(userSaved)

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    // console.log('registrando')
}

export const login= async (req, res)=>{
    //  const {username, email, password} = req.body;
    console.log('loguendo')
}