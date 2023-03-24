import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, MaxLength } from "class-validator";
import { Personas } from "./Personas";
import { Puestos } from "./Puestos";


@Entity()
export class Empleados{

    @PrimaryGeneratedColumn()
    @IsNotEmpty({message:'No puede estar vacio'})
    @IsInt({message:'Tiene que ser entero'})
    idEmpleado:number

    //esta se va a generar automaticamente cuando genere las relaciones en la entidades
    // @Column()
    // @IsNotEmpty({message:'No puede estar vacio'})
    // @IsInt({message:'Tiene que ser entero'})
    // idPersona:number;

    //esta se va a generar automaticamente cuando genere las relaciones en la entidades    
    // @Column()
    // @IsNotEmpty({message:'No puede estar vacio'})
    // @IsInt({message:'Tiene que ser entero'})
    // idPuesto:number;
    
    @Column()
    @IsNotEmpty({message:'No puede estar vacio'})
    @IsInt({message:'Tiene que ser entero'})
    telefonoLaboral:number;

    @Column()
    @IsNotEmpty({message:'No puede estar vacio'})
    @IsEmail()
    emailLaboral:string;
    
    @Column()
    @IsNotEmpty({message:'Se requiere el estado'})
    @IsBoolean({message:'Tiene que ser un valor booleano'})
    estado:boolean
    
    //Relacion de uno a uno con personas
    @OneToOne(()=>Personas,{cascade:['insert','update'] })
    @JoinColumn()
    persona: Personas;
    //Relacion de muchos a uno con puestos
    @ManyToOne(()=>Puestos,(puesto)=>puesto.empleados)
    puesto: Puestos;

}