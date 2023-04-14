import { Body, Controller, Delete, Get, HttpCode, Inject, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetExecuteQuery } from 'src/v1/infrastructure/cqrs/user/queries/impl/get-execute-query/get-execute-query';

@Controller('execute')
export class QueryExecuteController {
    constructor(        
        private readonly queryBus: QueryBus) {}

    @Get()
    @HttpCode(200)
    async getExecuteQuery(@Query("queryExecute") queryExecute: string) {
        const getExecuteQuery = new GetExecuteQuery();
        getExecuteQuery.queryExecute = queryExecute;
        
        return await this.queryBus.execute(getExecuteQuery);
    }
}
