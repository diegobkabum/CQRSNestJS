import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SaveUserCommand } from "../../impl/save-user.command/save-user.command";
import { User } from "src/v1/infrastructure/persistence/typeorm/cqrs/user/user";
 
@CommandHandler(SaveUserCommand)
export class SaveUserHandler implements ICommandHandler<SaveUserCommand> {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        ) {}

    async execute(command: SaveUserCommand) {
        var user = new User();        
        user.name = command.name;
        await this.userRepo.insert(user);
    }
}