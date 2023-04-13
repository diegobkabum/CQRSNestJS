import { Body, Controller, Get, HttpCode, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SaveUserCommand } from 'src/v1/infrastructure/cqrs/user/commands/impl/save-user.command/save-user.command';
import { GetUsersQuery } from 'src/v1/infrastructure/cqrs/user/queries/impl/get-users.query/get-users.query';
import { CreateUserCommandToken, GetUserQueryBusToken } from '../../dependency-inversion/token/v1.tokens';

@Controller('user')
export class UserController {
    constructor(        
        private readonly queryBus: QueryBus,        
        private readonly commandBus:CommandBus) {}

    @Get('all')
    @HttpCode(200)
    async getAll() {
      return await this.queryBus.execute(new GetUsersQuery());
    }

    @Post('add')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createEmployee(@Body() newUser: SaveUserCommand) {
      return await this.commandBus.execute(newUser);
    }
}
