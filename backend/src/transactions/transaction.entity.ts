import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { User } from '../users/user.entity'

@Entity({ name: 'transactions' })
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'timestamp with time zone', nullable: true })
  date: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column("text", { array: true, nullable: true })
  categories: string[];

  // @ManyToOne(() => User, user => user.transactions)
  // user: User;

  @Column({ name: 'userId' })
  userId: number
}
