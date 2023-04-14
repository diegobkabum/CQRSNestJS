import { Body, Controller, Delete, Get, HttpCode, Inject, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { DeleteUserCommand } from 'src/v1/infrastructure/cqrs/user/commands/impl/user/delete-user.command';
import { SaveUserCommand } from 'src/v1/infrastructure/cqrs/user/commands/impl/user/save-user.command';
import { GetUsersQuery } from 'src/v1/infrastructure/cqrs/user/queries/impl/get-users/get-users';
@Controller('user')
export class UserController {
    constructor(        
        private readonly queryBus: QueryBus,        
        private readonly commandBus:CommandBus) {}

    @Get('all')
    @HttpCode(200)
    async getAll() {
        const getUsersQuery = new GetUsersQuery();        
        return await this.queryBus.execute(getUsersQuery);
    }

    @Get('id')
    @HttpCode(200)
    async getId(@Query("id") id: number) {
        const getUsersQuery = new GetUsersQuery();
        getUsersQuery.id = id;
        
        return await this.queryBus.execute(getUsersQuery);
    }

    @Post('add')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createUser(@Body() newUser: SaveUserCommand) {
      return await this.commandBus.execute(newUser);
    }

    @Delete('delete')
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteUser(@Body() deleteUser: DeleteUserCommand) {   
        await this.commandBus.execute(deleteUser);        
    }
}
