/* eslint-disable prettier/prettier */

import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Tarea } from "./Tareas.entity";

@Injectable()
export class TareaRepository{
    
    constructor(
        @Inject('TAREA_REPOSITORY')
        private tareaRepository: Repository<Tarea>,
    ){}


    
}