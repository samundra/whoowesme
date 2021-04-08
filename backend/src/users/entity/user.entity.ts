import { Column, Entity, OneToMany } from 'typeorm'
import { Transaction } from '../../transactions/entity/transaction.entity'
import { JoinTable } from 'typeorm'

@Entity({ name: 'users' })
export class User {
  @Column({ type: 'uuid', nullable: false, primary: true, unique: true, generated: 'uuid' })
  id: string

  @Column({ nullable: true })
  firstName?: string

  @Column({ nullable: true })
  lastName?: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ length: 65 })
  password: string

  @Column({ default: true, nullable: true })
  isActive?: boolean

  @JoinTable()
  @OneToMany(
    () => Transaction,
    transactions => transactions.user,
  )
  transactions?: Transaction[]
}
