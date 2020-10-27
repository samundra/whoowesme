import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Transactions } from './transaction.entity'
import { Connection } from 'typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Transactions])],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {
  constructor(private connection: Connection) {}
}
