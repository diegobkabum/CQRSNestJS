import { Body, Controller, Delete, Get, HttpCode, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SavePedidoCommand } from 'src/v1/infrastructure/cqrs/user/commands/impl/pedido/pedido-save.command';
import { GetPedidosQuery } from 'src/v1/infrastructure/cqrs/user/queries/impl/get-pedidos/get-pedido';


@Controller('pedido')
export class PedidoController {
    constructor(        
        private readonly queryBus: QueryBus,        
        private readonly commandBus:CommandBus) {}

    @Get('all')
    @HttpCode(200)
    async getAll() {
        const getPedidosQuery = new GetPedidosQuery();
        getPedidosQuery.queryExecute = getPedidosQuery.queryAllUsers;
        return await this.queryBus.execute(getPedidosQuery);
    }

    @Get('id')
    @HttpCode(200)
    async getId(@Query("id") id: number) {
        const getPedidosQuery = new GetPedidosQuery();
        getPedidosQuery.id = id;
        return await this.queryBus.execute(getPedidosQuery);
    }

    @Post('add')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createPedido(@Body() newPedido: SavePedidoCommand) {
      return await this.commandBus.execute(newPedido);
    }
}
