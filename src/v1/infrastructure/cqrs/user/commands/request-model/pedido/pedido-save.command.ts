import { User } from "src/v1/infrastructure/persistence/typeorm/cqrs/user/user";

export class SavePedidoCommand {
    id: number;
    order_date: string;    
    user_id: User;
}
