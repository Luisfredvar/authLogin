import { Router } from "express";
import { register, login } from "../controllers/loginController";

const router = new Router();


    router.post('/resgister', register)
    router.post('/login', login)
    

    module.exports = router



