import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Transactions } from '../transactions/transaction.entity'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName?: string;

  @Column({ nullable: false })
  lastName?: string;

  @Column({ nullable: false })
  email: string;

  @Column({ length: 65 })
  password: string;

  @Column({ default: true })
  isActive?: boolean;

  @OneToMany(() => Transactions, transactions => transactions.user)
  transactions?: Transactions[];
}
