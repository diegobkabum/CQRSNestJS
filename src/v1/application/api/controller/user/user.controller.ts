import { Body, Controller, Get, HttpCode, Inject, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SaveUserCommand } from 'src/v1/infrastructure/cqrs/user/commands/request-model/save-user.command/save-user.command';
import { GetUsersQuery } from 'src/v1/infrastructure/cqrs/user/queries/request-model/get-users.query/get-users.query';

@Controller('user')
export class UserController {
    constructor(        
        private readonly queryBus: QueryBus,        
        private readonly commandBus:CommandBus) {}

    @Get('all')
    @HttpCode(200)
    async getAll() {
        const getUsersQuery = new GetUsersQuery();
        getUsersQuery.queryExecute = getUsersQuery.queryAllUsers;
        return await this.queryBus.execute(getUsersQuery);
    }

    @Get('id')
    @HttpCode(200)
    async getId(@Query("id") id: number) {
        const getUsersQuery = new GetUsersQuery();
        getUsersQuery.queryExecute = `${getUsersQuery.queryUserById} ${id}`;
        return await this.queryBus.execute(getUsersQuery);
    }

    @Post('add')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createEmployee(@Body() newUser: SaveUserCommand) {
      return await this.commandBus.execute(newUser);
    }
}
