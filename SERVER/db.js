import mongoose from "mongoose";

export const getConection = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://root:ReD09VaR89@cluster0.yvkqypm.mongodb.net/loginAuth');
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error)
    }
}