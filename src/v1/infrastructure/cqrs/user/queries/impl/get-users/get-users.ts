import { IGetQuery } from "src/v1/business/domain/cqrs/queries/impl/get.interface";

export class GetUsersQuery implements IGetQuery {
    public id: number = 0;
    public queryExecute: string = "";  
    public queryAllUsers: string = "select * from user";
    public queryUserById: string = `select * from user where id = `;
}
