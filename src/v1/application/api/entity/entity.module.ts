import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/v1/infrastructure/persistence/typeorm/cqrs/user/user';
import { UserController } from '../controller/user/user.controller';
import { CqrsModule } from '@nestjs/cqrs';


const features =[User];

@Module({
    imports:[TypeOrmModule.forFeature([...features]),CqrsModule],
    controllers: [UserController]
})
export class EntityModule {}