import {
  Body,
  HttpCode,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common'
import { GetUser } from '../auth/get-user.decorator'

import { User } from '../users/entity/user.entity'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { Transaction } from './transaction.entity'
import { TransactionsService } from './transactions.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { PaginationQueryDto } from '../common/pagination-query.dto'

@Controller('transactions')
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  getTransactions(
    @GetUser() user: User,
    @Query() paginationQueryDto: PaginationQueryDto,
  ): Promise<Transaction[]> {
    return this.transactionsService.getTransactions(user, paginationQueryDto)
  }

  @Get('/:id')
  getTransactionById(@Param('id') id: number, @GetUser() user: User): Promise<Transaction> {
    return this.transactionsService.getTransactionById(id, user)
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  createTransaction(@Body() createTransactionDto: CreateTransactionDto, @GetUser() user: User) {
    return this.transactionsService.create(createTransactionDto, user)
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteTransaction(@Param('id') id: number, @GetUser() user: User): Promise<void> {
    return this.transactionsService.delete(id, user)
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateTransaction(
    @Param('id') id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @GetUser() user: User,
  ): Promise<Transaction> {
    return this.transactionsService.update(id, updateTransactionDto, user)
  }
}
