import  express  from "express";
import morgan from "morgan";
import router from './src/routes/routesUsers'
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use('/api', router);

export default app;