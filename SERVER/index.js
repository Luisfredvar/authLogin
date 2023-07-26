import app from "./app.js";
import { getConection } from "./db.js";

app.listen(5000, ()=>console.log('Server running on port 5000'));

getConection();