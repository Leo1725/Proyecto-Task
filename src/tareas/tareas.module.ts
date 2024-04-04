/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './Tareas.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Tarea])], 
  controllers: [TareasController],
  providers: [
    TareasService, 
  ]
})
export class TareasModule {}
