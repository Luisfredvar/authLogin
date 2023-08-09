import Task from '../models/task.models.js';

export const getAllTasks = async(req, res)=>{
const Tasks = await Task.find();
res.json(Tasks);
};
export const getTaskById = async(req, res)=>{
const Task = await Task.findById(req.params.id);
if(!Task) return res.status(404).json({message :'Task not found'})
res.status(201).json(Task)
};
export const CreateTask = async(req, res)=>{
const {title, description, date} = req.body;

const newTask = new Task({
    title,
    description,
    date
});

const saveTask = new newTask.save();
};
export const UpdateTask = async(req, res)=>{

};
export const DeleteTask = async(req, res)=>{

};