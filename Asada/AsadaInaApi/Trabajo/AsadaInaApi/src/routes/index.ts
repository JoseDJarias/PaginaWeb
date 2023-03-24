import { Router } from "express";
import empleados from "./empleados";



//ruta principal del modulo
const routes=Router();

routes.use('/empleados',empleados);

export default routes;
