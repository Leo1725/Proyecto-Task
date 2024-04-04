/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm";
import { Tarea } from "./Tareas.entity";



export const tareaProviders = [
    {
        provide: 'TAREA_REPOSITORY',
        usefactory:(dataSource: DataSource) => dataSource.getRepository(Tarea),
        inject: ['DATA_SOURCE'],

    },

]
    