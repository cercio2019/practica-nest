import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioInterface } from './interfaces/usuario.interface';


@Controller('usuario')
export class UsuarioController {

    constructor(
        private usuarioService : UsuarioService
    ){}

    @Get()
    showUsuarios(){
        return this.usuarioService.getUsuarios();
    }

    @Get(':id')
    getUser(@Param('id') id:String){
        return this.usuarioService.getUsuario(id);
    }

    @Post()
    newUsuario(@Body() Datos:UsuarioInterface){
        return this.usuarioService.createUsuario(Datos);
    }

    @Put(':id')
    updateUser(@Param('id') id:String, @Body() datos:UsuarioInterface){
        return this.usuarioService.updateUsuario(id, datos);
    }

    @Delete(':id')
    deleteUser(@Param('id') id:String){
        return this.usuarioService.deleteUsuario(id);
    }
}
