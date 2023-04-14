import { CommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ISaveHandler } from "src/v1/business/domain/cqrs/commands/handler/save.handler.interface";
import { SavePedidoCommand } from "../../impl/pedido/pedido-save.command";
import { Pedido } from "src/v1/infrastructure/persistence/typeorm/cqrs/pedido/pedido.typeorm";
 
@CommandHandler(SavePedidoCommand)
export class SavePedidoHandler extends ISaveHandler<SavePedidoCommand,Pedido> {
    constructor(@InjectRepository(Pedido) pedidoRepo: Repository<Pedido>,entity: Pedido){
        super(pedidoRepo,entity);
    }
}