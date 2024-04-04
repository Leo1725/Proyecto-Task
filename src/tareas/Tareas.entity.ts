/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tarea{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

}


