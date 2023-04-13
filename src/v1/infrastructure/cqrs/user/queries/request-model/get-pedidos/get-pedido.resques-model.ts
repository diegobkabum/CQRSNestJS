export class GetPedidosQuery{
    public queryExecute: string = "";  
    public queryAllUsers: string = "select * from pedido";
    public queryUserById: string = `select * from pedido where id = `;
}
