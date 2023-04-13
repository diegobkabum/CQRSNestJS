import { Column, Entity, ManyToOne,PrimaryGeneratedColumn, TableForeignKey } from 'typeorm';
import { User } from '../user/user';
 
@Entity({name:'pedido'})
export class Pedido {
  @PrimaryGeneratedColumn('increment',{name:'id'})
  id: number;
 
  @Column({name:'data_pedido'})
  order_date: string;

  @ManyToOne(type => User, user => user.id) 
  user_id: User;
}