import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Productos{
    
    @PrimaryColumn()
    id:number
    @Column()
    nombre:String
    @Column()
    idCategoria:number
    @Column()
    precio:number
    @Column()
    estado:boolean

}