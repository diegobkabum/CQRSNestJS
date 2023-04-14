import { CommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IDeleteHandler } from "src/v1/business/domain/cqrs/commands/handler/delete.handler.interface";
import { DeleteUserCommand } from "../../impl/user/delete-user.command";
import { User } from "src/v1/infrastructure/persistence/typeorm/cqrs/user/user.typeorm";
 
@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler extends IDeleteHandler<DeleteUserCommand,User> {
    constructor(@InjectRepository(User) userRepo: Repository<User>,entity: User){
        super(userRepo,entity);
    }
}