import { QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IGetHandler } from 'src/v1/business/domain/cqrs/queries/handler/get.handler.interface';
import { Pedido } from 'src/v1/infrastructure/persistence/typeorm/cqrs/pedido/pedido.typeorm';
import { GetExecuteQuery } from '../../impl/get-execute-query/get-execute-query';
import { ExecuteQuery } from 'src/v1/infrastructure/persistence/typeorm/cqrs/execute.typeorm';

@QueryHandler(GetExecuteQuery)
export class GetExecuteHandler extends IGetHandler<GetExecuteQuery,ExecuteQuery> {
    constructor(@InjectRepository(ExecuteQuery) repo: Repository<ExecuteQuery>,entity: ExecuteQuery){
        super(repo,entity);        
    }
}