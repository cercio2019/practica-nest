import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import  {FotoService} from './foto.service';

@Controller('foto')
export class FotoController {

    constructor(
        private fotoServicio : FotoService
    ){}

    @Get()
    get(){
      return this.fotoServicio.showAll()
    }

    @Post()
    createNew(@Body() datos){
        return this.fotoServicio.createFoto(datos)
    }

    @Get(':id')
    getFoto(@Param('id') id:String){
        return this.fotoServicio.readFoto(id);
    }

    @Put(':id')
    updateFoto(@Param('id') id: String, @Body() datos){
        return this.fotoServicio.updateFot(id, datos);
    }

    @Delete(':id')
    deleteFoto(@Param('id') id:String){
        return this.fotoServicio.destroyFoto(id);
    }
}
