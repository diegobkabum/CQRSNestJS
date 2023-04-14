import { Column, Entity, ManyToOne,PrimaryGeneratedColumn, TableForeignKey } from 'typeorm';
import { User } from '../user/user.typeorm';
 
@Entity({name:'pedido'})
export class Pedido {
  @PrimaryGeneratedColumn('increment',{name:'id'})
  id: number;
 
  @Column({name:'data_pedido'})
  order_date: string;
  
  @ManyToOne(() => User, (user) => user.id)
  user: User;
}