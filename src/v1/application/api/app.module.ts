import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './database.module';
import { EntityModule } from './entity/entity.module';
import { UserController } from './controller/user/user.controller';

@Module({
  imports: [DataBaseModule, EntityModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
