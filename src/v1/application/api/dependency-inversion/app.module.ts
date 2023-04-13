import { Module } from '@nestjs/common';

import { AppService } from '../app.service';
import { DataBaseModule } from './database.module';
import { EntityModule } from './entity/entity.module';
import { AppController } from '../controller/app/app.controller';

@Module({
  imports: [DataBaseModule, EntityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
