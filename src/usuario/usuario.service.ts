import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioInterface } from './interfaces/usuario.interface';


@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario) 
        private readonly UsuarioRepositorio : Repository<Usuario>
    ){}

    async getUsuarios(): Promise<Usuario[]>{
        return await this.UsuarioRepositorio.find();
    }

    async getUsuario(id:String):Promise<Usuario>{
        return await this.UsuarioRepositorio.findOne({where:{id}})
    }

    async createUsuario(datos:UsuarioInterface){
        const usuario = await this.UsuarioRepositorio.create(datos);
        await this.UsuarioRepositorio.save(usuario);
        return usuario;
    }

    async updateUsuario(id:String, datos:UsuarioInterface):Promise<Usuario>{
        await this.UsuarioRepositorio.update({id}, datos);
        return await this.UsuarioRepositorio.findOne({id});
    }

    async deleteUsuario(id:String){
        await this.UsuarioRepositorio.delete({id});
        return {delete:true};
    }
}
