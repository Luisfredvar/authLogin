import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true //borrar espacios en blanco
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true //createdAt and UpdatedAt
});

export default mongoose.model("User", userSchema)