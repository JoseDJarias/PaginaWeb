import * as express from "express"
import { AppDataSource } from "./data-source"
import helmet from "helmet"
import cors = require("cors")
import routes from "./routes"

const Port = process.env.port || 3000;

AppDataSource.initialize().then(async () => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    //el que me permite establecer rutas
    app.use('/',routes);
     

    

    // start express server
    app.listen(Port,()=>{console.log(`Servidor corriendo puerto ${Port}`)})
    // console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
