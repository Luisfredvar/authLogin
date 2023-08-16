import { Router } from "express";
import { CreateTask, DeleteTask, UpdateTask, getAllTasks, getTaskById } from "../controllers/task.controller.js";
import { requiredAuth } from "../midlewares/tokenValidation.js";
import { createSchema } from "../schemas/task.schema.js";
import { validatorSchema } from "../midlewares/validator.meddleware.js";

const router = Router();

router.get('/task', requiredAuth, getAllTasks)
router.get('/task/:id', requiredAuth, getTaskById)
router.post('/task', requiredAuth, validatorSchema(createSchema),CreateTask)
router.put('/task/:id', requiredAuth, UpdateTask)
router.delete('/task/:id', requiredAuth, DeleteTask)

export default router;