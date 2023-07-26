import  express  from "express";
import morgan from "morgan";
import authRoutes from './src/routes/auth.routes.js'
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use("/api", authRoutes);

export default app;