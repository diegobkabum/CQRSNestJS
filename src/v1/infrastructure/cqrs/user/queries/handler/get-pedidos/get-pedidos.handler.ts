import { QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IGetHandler } from 'src/v1/business/domain/cqrs/queries/handler/get.handler.interface';
import { GetPedidosQuery } from '../../request-model/get-pedidos/get-pedido.resques-model';
import { Pedido } from 'src/v1/infrastructure/persistence/typeorm/cqrs/pedido/pedido.typeorm';

@QueryHandler(GetPedidosQuery)
export class GetPedidosHandler extends IGetHandler<GetPedidosQuery,Pedido> {
    constructor(@InjectRepository(Pedido) pedidoRepo: Repository<Pedido>,entity: Pedido){
        super(pedidoRepo,entity);        
    }
}