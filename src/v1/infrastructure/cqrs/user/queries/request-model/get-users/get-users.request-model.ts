export class GetUsersQuery{
    public queryExecute: string = "";  
    public queryAllUsers: string = "select * from user";
    public queryUserById: string = `select * from user where id = `;
}
