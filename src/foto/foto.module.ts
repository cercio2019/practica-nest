import { Module } from '@nestjs/common';
import { FotoService } from './foto.service';
import {FotoController} from './foto.controller';
import {Foto} from './foto.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Foto])],
  controllers : [FotoController],
  providers: [FotoService],
  exports: [TypeOrmModule]
})
export class FotoModule {}
