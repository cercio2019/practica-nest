import { Injectable } from '@nestjs/common';
import {Task} from './interfaces/Task';
@Injectable()
export class TasksService {


    tasks: Task[] = [
        {
            id: 1,
            nombre : "sumar en java",
            descripcion : "sumar dos numeros desde netbens",
            estatus : true
        },

        {
            id: 2,
            nombre : "restar en java",
            descripcion : "restar dos numeros desde netbens",
            estatus : true
        },

        {
            id: 3,
            nombre : "multipilcar en java",
            descripcion : "multiplicar dos numeros desde netbens",
            estatus : true
        }
    ]

    getTasks():Task[]{
        return this.tasks;
    }

    getTask(id:Number):Task{
        return this.tasks.find(task => task.id === id);
    }
}
