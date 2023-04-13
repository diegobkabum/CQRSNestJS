import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password:'S@ntos123',
      database:'cqrs',
      entities:[__dirname + '/../../../**/*{.ts,.js}'],
      synchronize: true,
    })
  ]
})
export class DataBaseModule {}