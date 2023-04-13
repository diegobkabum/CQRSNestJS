import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/v1/infrastructure/persistence/typeorm/cqrs/user/user';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from '../../controller/user/user.controller';
import { SaveUserHandler } from 'src/v1/infrastructure/cqrs/user/commands/handler/user/save-user.handler';
import { DeleteUserHandler } from 'src/v1/infrastructure/cqrs/user/commands/handler/user/delete-user.handler';
import { GetUsersHandler } from 'src/v1/infrastructure/cqrs/user/queries/handler/get-users/get-users.handler';
import { GetPedidosHandler } from 'src/v1/infrastructure/cqrs/user/queries/handler/get-pedidos/get-pedidos.handler';
import { Pedido } from 'src/v1/infrastructure/persistence/typeorm/cqrs/pedido/pedido.typeorm';
import { PedidoController } from '../../controller/pedido/pedido.controller';
import { SavePedidoHandler } from 'src/v1/infrastructure/cqrs/user/commands/handler/pedido/save-pedido.handler';


const features  = [User,Pedido];
const providers = [GetUsersHandler,SaveUserHandler,DeleteUserHandler,GetPedidosHandler,SavePedidoHandler,User,Pedido];
@Module({
    imports:[TypeOrmModule.forFeature([...features]),CqrsModule],
    providers:[...providers],
    controllers: [UserController,PedidoController]
})
export class EntityModule {}