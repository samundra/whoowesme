import { Injectable } from '@nestjs/common'
import { CreateTransactionDto } from './dto/transaction.dto'
import { Connection, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Transactions } from './transaction.entity'
import { User } from '../users/user.entity'

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private transactionRepository: Repository<Transactions>,
  ) {
  }

  // async create(createTransactionDto: CreateTransactionDto) {
  //   const transaction = new Transactions()
  //   transaction.amount = createTransactionDto.amount
  //   transaction.description = createTransactionDto.description
  //   transaction.date = createTransactionDto.date
  //   transaction.categories = createTransactionDto.categories
  //
  //   const user = new User()
  //   user.transactions = [transaction]
  //
  //   await this.transactionRepository.save(transaction)
  // }
}
