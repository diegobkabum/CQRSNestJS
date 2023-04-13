import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUsersQuery } from '../../impl/get-users.query/get-users.query';
import { User } from 'src/v1/infrastructure/persistence/typeorm/cqrs/user/user';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ) {}

    async execute(query: GetUsersQuery): Promise<User[]> {
        return await this.userRepo.query(query.GetName());
    }
}