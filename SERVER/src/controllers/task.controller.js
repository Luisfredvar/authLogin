import Task from '../models/task.models.js';

// NOTA: Get all Tasks
export const getAllTasks = async(req, res)=>{
const Tasks = await Task.find({
    user: req.user.id
}).populate('user')
res.json(Tasks);
};

// NOTA: Get Task by Id
export const getTaskById = async(req, res)=>{
const Task = await Task.findById(req.params.id);
if(!Task) return res.status(404).json({message :'Task not found'})
res.status(201).json(Task)
};

// NOTA: Create New Task
export const CreateTask = async(req, res)=>{
const {title, description, date} = req.body;

const newTask = new Task({
    title,
    description,
    date,
    user:req.user.id
});

const saveTask = await newTask.save();
if(!saveTask) res.status(404).json({message:'Something gone wrong'})
res.status(201).json(saveTask)
};

// NOTA: Update Task By Id
export const UpdateTask = async(req, res)=>{

const UpdateTask = await Task.findByIdAndUpdate(req.params.id, req.body,{
    new: true
});
if(!UpdateTask) res.status(404).json({message:'Task not Found'})
res.status(201).json(UpdateTask)
};

// NOTA: Delete Task
export const DeleteTask = async(req, res)=>{

    const TaskDelete = await Task.findByIdAndDelete(req.params.id)
    if(!TaskDelete) return res.status(404).json({message:'Id Task not Found'})
   res.status(204).json({message:'Deleted Task successfully'});
};