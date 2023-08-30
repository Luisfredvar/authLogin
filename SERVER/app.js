import  express  from "express";
import morgan from "morgan";
import authRoutes from './src/routes/auth.routes.js'
import taskRoutes from './src/routes/task.routes.js'
import cors from 'cors'
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials: true
}));
app.use(morgan('dev'));// Uses to see request on console
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.use("/api", authRoutes);
app.use('/api', taskRoutes)

export default app;