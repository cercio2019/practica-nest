import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { FotoController } from './foto/foto.controller';
import { FotoModule } from './foto/foto.module';
import {Foto} from './foto/foto.entity';
import {FotoService} from './foto/foto.service';
@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(
    {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "cv23952018",
      database: "galeria",
      entities: [Foto],
      synchronize: true
    }
  ), FotoModule],
  controllers: [AppController, TasksController, FotoController],
  providers: [AppService, TasksService, FotoService]
})
export class AppModule {
}
