import { ICommandHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm";
import { IGetQuery } from "../impl/get.interface";

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

    async execute(query: T): Promise<E[] | E> {    
        const queryHandler = query as IGetQuery;     
        const id = Number(queryHandler.id);         
        this.entity.id = id;

        if (queryHandler.queryExecute) return await this.repo.query(queryHandler.queryExecute);

        return this.entity.id ? await this.repo.findOne({where:this.entity.id}) : await this.repo.find();                
    }
}