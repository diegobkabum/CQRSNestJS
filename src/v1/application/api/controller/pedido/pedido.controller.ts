import { Body, Controller, Delete, Get, HttpCode, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SavePedidoCommand } from 'src/v1/infrastructure/cqrs/user/commands/request-model/pedido/pedido-save.command';
import { GetPedidosQuery } from 'src/v1/infrastructure/cqrs/user/queries/request-model/get-pedidos/get-pedido.resques-model';

@Controller('pedido')
export class PedidoController {
    constructor(        
        private readonly queryBus: QueryBus,        
        private readonly commandBus:CommandBus) {}

    @Get('all')
    @HttpCode(200)
    async getAll() {
        const getUsersQuery = new GetPedidosQuery();
        getUsersQuery.queryExecute = getUsersQuery.queryAllUsers;
        return await this.queryBus.execute(getUsersQuery);
    }

    @Get('id')
    @HttpCode(200)
    async getId(@Query("id") id: number) {
        const getUsersQuery = new GetPedidosQuery();
        getUsersQuery.queryExecute = `${getUsersQuery.queryUserById} ${id}`;
        return await this.queryBus.execute(getUsersQuery);
    }

    @Post('add')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createUser(@Body() newPedido: SavePedidoCommand) {
      return await this.commandBus.execute(newPedido);
    }
}
