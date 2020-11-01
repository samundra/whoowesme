import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';

import { User } from '../users/user.entity';
import { CreateTransactionDto } from './dto/transaction.dto';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('transactions')
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {
  }

  @Get('')
  getTransactions(
    @GetUser() user: User
  ): Promise<Transaction[]> {
    return this.transactionsService.getTransactions(user);
  }

  @Get('/:id')
  getTransactionById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<Transaction> {
    return this.transactionsService.getTransactionById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
    @GetUser() user: User
  ): Promise<Transaction> {
    if (!createTransactionDto.amount) {
      throw new BadRequestException();
    }
    return this.transactionsService.createTransaction(createTransactionDto, user);
  }

  @Delete('/:id')
  deleteTransaction(@Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<void> {
    return this.transactionsService.deleteTransaction(id, user);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateTransaction(
    @Param('id', ParseIntPipe) id: number,
    @Body() CreateTransactionDto: CreateTransactionDto,
    @GetUser() user: User
  ): Promise<Transaction> {
    return this.transactionsService.updateTransaction(id, CreateTransactionDto, user);
  }
}
