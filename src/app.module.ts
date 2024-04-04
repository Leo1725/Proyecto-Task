/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tareas/Tareas.entity';



@Module({
  imports: [TareasModule,
            TypeOrmModule.forRoot({
              type : 'postgres',
              host : 'localhost',
              port : 5432 ,
              username : 'postgres',
              password : '2525',
              database : 'Tareas-Bd',
              autoLoadEntities : true,
              synchronize : true,
            })],
  providers: [Tarea],
 
})
export class AppModule {}
