import { Request, response, Response } from "express";
import { request } from "https";
import { AppDataSource } from "../data-source";
import { Productos } from "../entity/Productos";

class ProductosController {

  static get = async (req: Request, res: Response) => {
    //repositorio(entidad de productos )
    const productosRepo = AppDataSource.getRepository(Productos);
    const lista = await productosRepo.find();
    if (lista.length > 0) {
      return res.status(200).json(lista);
    } else {
      return res.status(400).json({ message: 'no hay datos' })
    }
  }

  static getById = async (req: Request, res: Response) => {
    //pasar datos por id
    const productosRepo = AppDataSource.getRepository(Productos);

    const id = parseInt(req.params['id']);
    if (!id) {
      return res.status(400).json({ message: 'no se indico id' })
    }
    try {
      const producto = await productosRepo.findOneOrFail({ where: { id } })
      return res.status(200).json(producto)

    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el id' })

    }

  }

  static deleteById = async (req: Request, res: Response) => {
    //pasar datos por id
    const productosRepo = AppDataSource.getRepository(Productos);

    const id = parseInt(req.params['id']);
    //cuando asigno una variable con let es dentro de este metodo o de lo que lo contenga no es global
    let producto:Productos;

    try {
       producto = await productosRepo.findOneOrFail({ where: { id } })

    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el id' })

    }

    producto.estado=false;
    await productosRepo.save(producto);
    return res.status(200).json({message:'El producto se ha eliminado'})
  }

}

export default ProductosController;