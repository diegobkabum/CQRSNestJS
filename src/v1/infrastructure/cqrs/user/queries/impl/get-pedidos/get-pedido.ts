import { IGetQuery } from "src/v1/business/domain/cqrs/queries/impl/get.interface";

export class GetPedidosQuery implements IGetQuery {
    public id: number = 0;
    public queryExecute: string = "";      
}
