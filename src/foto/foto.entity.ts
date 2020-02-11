import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('fotos')
export class Foto {
   
    @PrimaryGeneratedColumn()
    id:Number;

    @Column({length:50})
    nombre: String;

    @Column('text')
    descripcion: String;

    @Column()
    file : String;

    @Column('int')
    visto : Number;

    @Column()
    publicado : Boolean
}