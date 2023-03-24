import { Router } from "express";
import ProductosController from "../controller/ProductosController";

const routes=Router();

routes.get('',ProductosController.get);
routes.get('/:id',ProductosController.getById);
routes.delete('/:id',ProductosController.deleteById);



export default routes;