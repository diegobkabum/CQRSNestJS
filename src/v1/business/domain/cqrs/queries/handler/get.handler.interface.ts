import { ICommandHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm";

export class IGetHandler<T,E> implements ICommandHandler<T> {
    protected readonly repo: Repository<E>   
    private entity: any;
    
    constructor(
        repo: Repository<E>,
        entity: any        
    ) {
        this.repo = repo;
        this.entity = entity;
    }

    async execute(query: T): Promise<E[]> {        
        return (query["queryExecute"]) ?  await this.repo.query(query["queryExecute"].toString())
                                :  this.entity;
        
    }
}