import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Empleados } from "./Empleados";

    @Entity()
    export class Puestos {

        @PrimaryGeneratedColumn()
        @IsNotEmpty({message:'No puede estar vacio'})
        @IsInt({message:'Tiene que ser entero'})
        idPuesto:number;

        @Column()
        @IsString({message:'Tiene que ser de tipo caracter'})
        @IsNotEmpty({message:'No puede estar vacio'})
        @MaxLength(20,{message:'El nombre no puede tener mas de 20 caracteres'})
        nombre:String;
        
        @Column()
        @IsBoolean({message:'Tiene que ser booleano'})
        estado:boolean;

        @OneToMany(()=>Empleados, (puest)=>puest.puesto)
        empleados:Empleados[]
    }