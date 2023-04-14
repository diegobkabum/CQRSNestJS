import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity({name:'user'})
export class User {
  @PrimaryGeneratedColumn('increment',{name:'id'})
  id: number;
 
  @Column({name:'name'})
  name: string;
}