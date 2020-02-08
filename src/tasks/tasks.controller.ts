import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import {createTasksDto} from './dto/create.tasks.dto';
import {Task} from './interfaces/Task';
import {TasksService} from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskServicio : TasksService){}

    @Get()
    getTasks():Task[]{
        return this.taskServicio.getTasks();
    }

    @Get(':taskid')
    getTask(@Param('taskid') taskid: String){
        return this.taskServicio.getTask(Number(taskid));
    }

    @Post()
    newTask(@Body() task:createTasksDto){
        console.log(task);
        return "registrar TAREA";
    }

    @Delete(':id')
    deleteTask(@Param('id') id):String{

        return `eliminando la tarea numb ${id}`;
    }

    @Put(':id')
    updatetask(@Body() task:createTasksDto, @Param('id') id):String{
        console.log(task);
        console.log(id);
        return "Tara ha sido actualizada"
    }
}
