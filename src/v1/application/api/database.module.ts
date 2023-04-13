import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from 'src/v1/infrastructure/persistence/typeorm/cqrs/user/user';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password:'S@ntos123',
      database:'cqrs',
      entities:[User],
      synchronize: true,
    })
  ]
})
export class DataBaseModule {}