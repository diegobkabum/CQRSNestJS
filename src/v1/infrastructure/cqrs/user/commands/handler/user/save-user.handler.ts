import { CommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ISaveHandler } from "src/v1/business/domain/cqrs/commands/handler/save.handler.interface";
import { SaveUserCommand } from "../../impl/user/save-user.command";
import { User } from "src/v1/infrastructure/persistence/typeorm/cqrs/user/user.typeorm";
 
@CommandHandler(SaveUserCommand)
export class SaveUserHandler extends ISaveHandler<SaveUserCommand,User> {
    constructor(@InjectRepository(User) userRepo: Repository<User>,entity: User){
        super(userRepo,entity);
    }
}