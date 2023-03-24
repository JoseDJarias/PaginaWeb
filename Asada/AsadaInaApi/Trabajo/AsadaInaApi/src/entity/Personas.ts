import { IsEmail, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empleados } from "./Empleados";

@Entity()
export class Personas{

    @PrimaryGeneratedColumn()
    @IsNotEmpty({message:'No puede estar vacio'})
    @IsInt({message:'Tiene que ser entero'})
    idPersona:number;

    @Column()
    @IsNotEmpty({message:'Np puede estar vacio'})
    @MaxLength(50,{message:'El nombre no puede tener mas de 50 caracteres'})
    @IsString({message:'No es un caracter'})
    nombre:string;

    @Column()
    @IsNotEmpty({message:'Np puede estar vacio'})
    @MaxLength(50,{message:'El apellido no puede tener mas de 50 caracteres'})
    @IsString({message:'No es un caracter'})
    apellido1:string;

    
    @Column()
    @IsNotEmpty({message:'Np puede estar vacio'})
    @MaxLength(50,{message:'El apellido no puede tener mas de 50 caracteres'})
    @IsString({message:'No es un caracter'})
    apellido2:string;
    
    @Column()
    @IsNotEmpty({message:'No puede estar vacio'})
    @IsEmail()
    email:string;

    @Column()
    @IsNotEmpty({message:'No puede estar vacio'})
    @IsInt({message:'Tiene que ser entero'})
    @MaxLength(11,{message:'El telefono no puede tener mas de 11 digitos'})
    telefono:number;



    // @OneToOne(()=>Empleados, (pers)=>pers.persona)
    // @JoinColumn()
    empleados:Empleados
}       