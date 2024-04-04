/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { TareasService } from './tareas.service';

@Controller('tareas')
export class TareasController {

    constructor(private tareaService = TareasService){ }//inyeccion de dependencia
}
