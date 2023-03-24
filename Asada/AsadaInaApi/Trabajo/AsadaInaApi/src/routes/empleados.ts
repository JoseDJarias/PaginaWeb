import { Router } from "express";
import EmpleadosController from "../controller/EmpleadosController";

const routes=Router();

routes.get('',EmpleadosController.get);
routes.get('/:idEmpleado',EmpleadosController.getById);
routes.delete('/:idEmpleado',EmpleadosController.delete);
routes.post('/create',EmpleadosController.create);
routes.patch('/update/:idEmpleado',EmpleadosController.update);



export default routes;