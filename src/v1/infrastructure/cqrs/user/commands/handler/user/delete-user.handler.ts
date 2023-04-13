import { CommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/v1/infrastructure/persistence/typeorm/cqrs/user/user";
import { IDeleteHandler } from "src/v1/business/domain/cqrs/commands/handler/delete.handler.interface";
import { DeleteUserCommand } from "../../request-model/user/delete-user.command";
 
@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler extends IDeleteHandler<DeleteUserCommand,User> {
    constructor(@InjectRepository(User) userRepo: Repository<User>,entity: User){
        super(userRepo,entity);
    }
}