import { InternalServerErrorException } from '@nestjs/common';
import { Brackets, EntityRepository, Repository } from 'typeorm';

import { User } from '../users/user.entity';
import { CreateTransactionDto } from './dto/transaction.dto';
import { Transaction } from './transaction.entity';

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {

  constructor() {
    super();
  }

  async getTransactions(
    user: User
  ): Promise<Transaction[]> {
    const query = this.createQueryBuilder('transaction');

    query.where('transaction.userId =  :userId', { userId: user.id })
    query.orderBy('updated', 'DESC')

    try {
      const transactions = await query.getMany();
      return transactions;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createTransaction(createTransactionDto: CreateTransactionDto, user: User): Promise<Transaction> {
    const { amount, description, date, categories } = createTransactionDto;
    const transaction = new Transaction();
    transaction.amount = amount;
    transaction.description = description;
    transaction.date = date;
    transaction.categories = categories;
    transaction.user = user;

    try {
      await transaction.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    delete transaction.user;

    return transaction;
  }
}