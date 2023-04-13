import { ICommandHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm";

 
export class ISaveHandler<T,E> implements ICommandHandler<T> { 
    protected readonly repo: Repository<E>   
    private entity: any;
    
    constructor(
        repo: Repository<E>,
        entity: any        
    ) {
        this.repo = repo;
        this.entity = entity;
    }

    async execute(command: T) {    
        let entityClass = this.entity;
        entityClass =  {...command};        
        await this.repo.save(entityClass);
    }
}