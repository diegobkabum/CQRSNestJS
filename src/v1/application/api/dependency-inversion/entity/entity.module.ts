import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/v1/infrastructure/persistence/typeorm/cqrs/user/user';
import { CqrsModule } from '@nestjs/cqrs';
import { GetUsersHandler } from 'src/v1/infrastructure/cqrs/user/queries/handlers/get-users.handler/get-users.handler';
import { SaveUserHandler } from 'src/v1/infrastructure/cqrs/user/commands/handler/save-user-handler/save-user.handler';
import { UserController } from '../../controller/user/user.controller';


const features  = [User];
const providers = [GetUsersHandler,SaveUserHandler,User];
@Module({
    imports:[TypeOrmModule.forFeature([...features]),CqrsModule],
    providers:[...providers],
    controllers: [UserController]
})
export class EntityModule {}