import {Entity, PrimaryColumn, Column} from 'typeorm';

@Entity('usuario')

export class Usuario {

    @PrimaryColumn()
    id:Number;

    @Column({length:30})
    nombre : String;

    @Column({length:10})
    password : String;

    @Column({length:20})
    tipo_usuario : String;

    @Column()
    estatus : Boolean;
}