import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../users/user.entity';
import { CreateTransactionDto } from './dto/transaction.dto';
import { Transaction } from './transaction.entity';
import { Repository } from "typeorm";

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>) {
  }

  // Get transactions for user
  async getTransactions(user: User): Promise<Transaction[]> {
    return this.transactionRepository.find({
      where: { userId: user.id }
    });
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

  /**
   * Create Transaction
   * @param createTransactionDto
   * @param user
   */
  async create(createTransactionDto: CreateTransactionDto, user: User): Promise<Transaction> {
    const transaction = this.transactionRepository.create(createTransactionDto);
    await this.transactionRepository.merge(transaction, { userId: user.id });
    return this.transactionRepository.save(transaction);
  }

  /**
   * Delete Transaction
   * @param id
   * @param user
   */
  async delete(id: number, user: User): Promise<void> {
    const transaction = await this.transactionRepository.delete({ id, userId: user.id });

    if (transaction.affected === 0) {
      throw new NotFoundException();
    }
  }

  /**
   * Update Transaction
   * @param id
   * @param updateTransactionDto
   * @param user
   */
  async update(id: number, updateTransactionDto: CreateTransactionDto, user: User): Promise<Transaction> {
    // Remove userId from updateTransactionDto
    const transaction = await this.transactionRepository.preload({
      id: +id,
      userId: +user.id,
      ...updateTransactionDto,
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction #${id} not found`);
    }

    return this.transactionRepository.save(transaction);
  }
}
