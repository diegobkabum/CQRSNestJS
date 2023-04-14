import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from '../../controller/user/user.controller';
import { SaveUserHandler } from 'src/v1/infrastructure/cqrs/user/commands/handler/user/save-user.handler';
import { DeleteUserHandler } from 'src/v1/infrastructure/cqrs/user/commands/handler/user/delete-user.handler';
import { GetUsersHandler } from 'src/v1/infrastructure/cqrs/user/queries/handler/get-users/get-users.handler';
import { GetPedidosHandler } from 'src/v1/infrastructure/cqrs/user/queries/handler/get-pedidos/get-pedidos.handler';
import { Pedido } from 'src/v1/infrastructure/persistence/typeorm/cqrs/pedido/pedido.typeorm';
import { PedidoController } from '../../controller/pedido/pedido.controller';
import { SavePedidoHandler } from 'src/v1/infrastructure/cqrs/user/commands/handler/pedido/save-pedido.handler';
import { User } from 'src/v1/infrastructure/persistence/typeorm/cqrs/user/user.typeorm';
import { GetExecuteHandler } from 'src/v1/infrastructure/cqrs/user/queries/handler/get-execute-query/get-execute-query';
import { ExecuteQuery } from 'src/v1/infrastructure/persistence/typeorm/cqrs/execute.typeorm';
import { QueryExecuteController } from '../../controller/execute-query/execute-query.controller';


const typeOrms  = [User,Pedido,ExecuteQuery];
const providers = [GetUsersHandler,SaveUserHandler,DeleteUserHandler,GetPedidosHandler,SavePedidoHandler,GetExecuteHandler];
@Module({
    imports:[TypeOrmModule.forFeature([...typeOrms]),CqrsModule],
    providers:[...providers,...typeOrms],
    controllers: [UserController,PedidoController,QueryExecuteController]
})
export class EntityModule {}