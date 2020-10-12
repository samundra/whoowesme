import { Controller, Body, Post } from '@nestjs/common'
import { CreateTransactionDto } from './dto/transaction.dto'
import { TransactionsService } from './transactions.service'

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {
  }
  @Post('/')
  create(@Body() createTransactionDto: CreateTransactionDto) {
    // console.log(createTransactionDto)
    // this.transactionService.create(createTransactionDto);
    return 'Transaction created'
  }
}
