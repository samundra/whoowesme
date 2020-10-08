import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity()
export class TransactionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ default: true })
  isActive: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;
}
