import { Column, Entity, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from '../../users/entity/user.entity'
import { ApiProperty } from '@nestjs/swagger'
import { IsDateString } from 'class-validator'

@Entity({ name: 'transactions' })
export class Transaction {
  @Column({ nullable: false, primary: true, unique: true, generated: 'uuid' })
  id: string

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  @ApiProperty({ example: 1000, description: 'Amount of transaction' })
  amount: number

  @Column({ type: 'varchar', length: 300 })
  @ApiProperty({ example: 'Descrption', description: 'Bought grocery items' })
  description: string

  /**
   * Date of transaction
   * @example 2021-04-03  02:00:00 UTC Timezone
   */
  @Column({ type: 'timestamp with time zone', nullable: true })
  @IsDateString()
  date: Date

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column('text', { array: true, nullable: true })
  categories: string[]

  @ManyToOne(
    () => User,
    user => user.transactions,
  )
  user: User

  @Column({ name: 'userId', type: 'uuid' })
  userId: string
}
