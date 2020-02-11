import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Foto} from './foto.entity';

@Injectable()
export class FotoService {

    constructor(
        @InjectRepository(Foto) private readonly fotoRepository : Repository<Foto>,
    ){}

    async showAll():Promise<Foto[]>{
        return await this.fotoRepository.find() 
    }

    async createFoto(datos){
        const foto = await this.fotoRepository.create(datos);
        await this.fotoRepository.save(foto);
        return foto;
    }

    async readFoto(id:String){
        return await this.fotoRepository.findOne({where:{id}})
    }

    async updateFot(id:String, datos){
        await this.fotoRepository.update({id}, datos);
        return await this.fotoRepository.findOne({id});
    }

    async destroyFoto(id : String){
        await this.fotoRepository.delete({id});
        return {delete:true};
    }
}
