import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Connection, Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { CreateTransactionDto } from '../transactions/dto/transaction.dto'
import { Transactions } from '../transactions/transaction.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection,
  ) {
  }

  // async createMany(users: User[]) {
  //   const queryRunner = this.connection.createQueryRunner()
  //
  //   await queryRunner.connect()
  //   await queryRunner.startTransaction()
  //   try {
  //     await queryRunner.manager.save(users[0])
  //     await queryRunner.manager.save(users[1])
  //
  //     await queryRunner.commitTransaction()
  //   } catch (err) {
  //     // since we have errors lets rollback the changes we made
  //     await queryRunner.rollbackTransaction()
  //   } finally {
  //     // you need to release a queryRunner which was manually instantiated
  //     await queryRunner.release()
  //   }
  // }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async create(createUserDto: CreateUserDto) {
    // Create user
  }

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const transaction = new Transactions()
    transaction.amount = createTransactionDto.amount
    transaction.description = createTransactionDto.description
    transaction.date = createTransactionDto.date
    transaction.categories = createTransactionDto.categories

    // todo: Get user from the active session
    const user = await this.usersRepository.findOne({
      where: { id: 1 },
      cache: false,
    })

    transaction.user = user

    const transactionRepository = this.connection.getRepository('Transactions')
    await transactionRepository.save(transaction)
  }
}

