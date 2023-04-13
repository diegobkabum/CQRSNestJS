import { QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUsersQuery } from '../../request-model/get-users/get-users.request-model';
import { User } from 'src/v1/infrastructure/persistence/typeorm/cqrs/user/user';
import { IGetHandler } from 'src/v1/business/domain/cqrs/queries/handler/get.handler.interface';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler extends IGetHandler<GetUsersQuery,User> {
    constructor(@InjectRepository(User) userRepo: Repository<User>,entity: User){
        super(userRepo,entity);        
    }
}