import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { validate } from "class-validator";
import { Empleados } from "../entity/Empleados";
import { Personas } from "../entity/Personas";
import { Puestos } from "../entity/Puestos";



class EmpleadosController {

  //Listo, funciona 
  static get = async (req: Request, res: Response) => {
    console.log('Hola');
    //repositorio(entidad de productos )
    const empleadosRepo = AppDataSource.getRepository(Empleados);
    const lista = await empleadosRepo.find({ where: { estado: true }, relations: ['persona', 'puesto'] });
    if (lista.length > 0) {
      return res.status(200).json(lista);
    } else {
      return res.status(400).json({ message: 'no hay datos' })
    }
  }
  //Listo, funciona 
  static getById = async (req: Request, res: Response) => {
    //pasar datos por id
    const empleadosRepo = AppDataSource.getRepository(Empleados);

    const idEmpleado = parseInt(req.params['idEmpleado']);
    if (!idEmpleado) {
      return res.status(400).json({ message: 'no hay empleado con ese id  ' })
    }
    try {
      const empleado = await empleadosRepo.findOneOrFail({ where: { idEmpleado, estado: true }, relations: ['persona', 'puesto'] })
      return res.status(200).json(empleado)

    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el empleado' })

    }

  }


  static delete = async (req: Request, res: Response) => {
    //pasar datos por id
    const empleadosRepo = AppDataSource.getRepository(Empleados);

    // Extraigo de la ruta el id enviado, lo escribo igual que lo defini en la ruta, el nombre de la const puede ser x
    const idEmpleado = parseInt(req.params['idEmpleado']);
    //cuando asigno una variable con let es dentro de este metodo o de lo que lo contenga no es global
    // asigno variable para verificar si existe y cambiarle de estado
    let empleado: Empleados;

    // compruebo  si existe el producto
    try {
      // valido si existe 
      empleado = await empleadosRepo.findOneOrFail({ where: { idEmpleado, estado: true } })

    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el id' })

    }
    // si exist con el id, cambio el estado a false
    empleado.estado = false; // borrado logico
    await empleadosRepo.save(empleado);
    return res.status(200).json({ message: 'El empleado se ha eliminado' })
  }


  static create = async (req: Request, res: Response) => {

    //destructuring
    const { idEmpleado,idPersona, idPuesto, nombre, apellido1, apellido2, emailLaboral, telefonoLaboral, email, telefono } = req.body;


    //validacion
    if (!idEmpleado) {
      return res.status(400).json({ message: 'Falta el ID' });
    }
    else if (!nombre) {
      return res.status(400).json({ message: 'Falta el nombre' });
    }
    else if (!apellido1) {
      return res.status(400).json({ message: 'Falta el primer apellido' });
    }
    else if (!apellido2) {
      return res.status(400).json({ message: 'Falta el segundo apellido' });
    } else if (!email) {
      return res.status(400).json({ message: 'Falta el email personal' });
    }
    else if (!telefono) {
      return res.status(400).json({ message: 'Falta el telefono' });
    }
    else if (!idPersona) {
      return res.status(400).json({ message: 'Falta la identificacion de la persona' });
    }
    else if (!idPuesto) {
      return res.status(400).json({ message: 'Falta el puesto' });
    }
    else if (!emailLaboral) {
      return res.status(400).json({ message: 'Falta el email laboral' });
    }
    else if (!telefonoLaboral) {
      return res.status(400).json({ message: 'Falta el telefono Laboral' });
    }

    const empleadosRepo = AppDataSource.getRepository(Empleados);


    // valido si existe el producto con ese id
    if (await empleadosRepo.findOne({ where: { idEmpleado } })) {

      // Respondo con error si ya existe el producto en la base de datos
      return res.status(400).json({ message: 'Ya existe un empleado con ese id' });
    }


    
    const puestoRepo = AppDataSource.getRepository(Puestos);
    
    let puesto: Puestos;
    try {
      puesto = await puestoRepo.findOneOrFail({ where: { idPuesto } })
    } catch (error) {
      return res.status(400).json({ message: 'No existe el puesto indicado' })
    }
    
    
    // Creo entidad nueva enviar a guardar los datos y se setea los valores
    let persona = new  Personas;
    persona.idPersona = idPersona;
    persona.nombre = nombre;
    persona.apellido1 = apellido1;
    persona.apellido2 = apellido2;
    persona.email = email;
    persona.telefono = telefono;

    let empleado = new Empleados();
    empleado.idEmpleado = idEmpleado;
    empleado.puesto = puesto;
    empleado.persona = persona;
    empleado.telefonoLaboral = telefonoLaboral;
    empleado.emailLaboral = emailLaboral;
    empleado.persona = persona;
    empleado.estado = true;

    //valido con el class validator
    const error = await validate(empleado, { validationError: { target: false, value: false } });
    if (error.length > 0) {
      return res.status(400).json(error);
    }

    await empleadosRepo.save(empleado);
    return res.status(201).json({ message: 'El empleado fue creado' });

  }

  static update = async (req: Request, res: Response) => {
    //vamos a pasar el id por la url
    const idEmpleado = parseInt(req.params['idEmpleado']);
    const { idPuesto, idPersona, emailLaboral, telefonoLaboral, apellido1, apellido2, email, telefono, nombre } = req.body;
    // validar datos de entrada ()
    if (!idEmpleado) {
      return res.status(400).json({ message: 'Falta el ID' });
    }
    else if (!idPersona) {
      return res.status(400).json({ message: 'Falta el idPersona' });
    }
    else if (!idPuesto) {
      return res.status(400).json({ message: 'Falta el idPuesto' });
    }
    else if (!nombre) {
      return res.status(400).json({ message: 'Falta el nombre' });
    }
    else if (!apellido1) {
      return res.status(400).json({ message: 'Falta el primer apellido' });
    }
    else if (!apellido2) {
      return res.status(400).json({ message: 'Falta el segundo apellido' });
    } else if (!email) {
      return res.status(400).json({ message: 'Falta el email personal' });
    }
    else if (!telefono) {
      return res.status(400).json({ message: 'Falta el telefono' });
    }
    
    let empleado: Empleados;
    
    const empleadosRepo = AppDataSource.getRepository(Empleados);
    
    
    try {
      empleado = await empleadosRepo.findOneOrFail({ where: { idEmpleado, estado:true } })
      
    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el id' })
      
    }
    
    // Let puesto: Puestos;
    // const puestoRepo = AppDataSource.getRepository(Puestos);
    
    // try {
      //   puesto = await puestoRepo.findOneOrFail({ where: { idPuesto, estado:true } })
      
      // } catch (error) {
        //   return res.status(400).json({ message: 'no se encontro con el id' })
        
        // }
        
        // const personaRepo = AppDataSource.getRepository(Personas);
        let persona= new Personas();
        
        console.log(nombre) //hasta aqui me pasa el console.log
        // Caigo encima a los campos especificos
        //error a la hora de setear los datos de las personas
        persona.nombre = nombre;
        persona.apellido1 = apellido1;
        persona.apellido2 = apellido2;
        persona.email = email;
        persona.telefono = telefono;
        
        empleado.persona=persona;
    empleado.emailLaboral = emailLaboral;
    empleado.telefonoLaboral = telefonoLaboral;

    //valido con el class validator
    const errorEmp = await validate(empleado, { validationError: { target: false, value: false } });
    const errorPer = await validate(persona, { validationError: { target: false, value: false } });

    if (errorEmp.length > 0) {
      return res.status(400).json(errorEmp);
    }
    
    if (errorPer.length > 0) {
      return res.status(400).json(errorPer);
    }

    await empleadosRepo.save(empleado);

    return res.status(200).json({ message: 'Los datos del empleado han sido actualizado' });

  }







}



export default EmpleadosController