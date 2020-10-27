import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../users/user.entity';
import { CreateTransactionDto } from './dto/transaction.dto';
import { Transaction } from './transaction.entity';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionRepository) private transactionRepository: TransactionRepository) {
  }

  async getTransactions(
    user: User
  ): Promise<Transaction[]> {
    return this.transactionRepository.getTransactions(user);
  }

  async getTransactionById(
    id: number,
    user: User
  ): Promise<Transaction> {
    const foundTransaction = await this.transactionRepository.findOne({ where: { id, userId: user.id } });

    if (!foundTransaction) {
      throw new NotFoundException(`Transaction with id ${id} was not found`);
    }

    return foundTransaction;
  }

  async createTransaction(createTransactionDto: CreateTransactionDto, user: User): Promise<Transaction> {
    return this.transactionRepository.createTransaction(createTransactionDto, user);
  }

  async deleteTransaction(id: number, user: User): Promise<void> {
    const transaction = await this.transactionRepository.delete({ id, userId: user.id });

    if (transaction.affected === 0) {
      throw new NotFoundException();
    }
  }

  async updateTransaction(id: number, createTransactionDto: CreateTransactionDto, user: User): Promise<Transaction> {
    const { amount, description, date, categories } = createTransactionDto;

    const transaction = await this.getTransactionById(id, user);

    transaction.amount = amount;
    transaction.description = description;
    transaction.date = date;
    transaction.categories = categories;
    transaction.user = user;

    await this.transactionRepository.save(transaction);

    delete transaction.user;

    return transaction;
  }
}
