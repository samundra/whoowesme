import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { TransactionRepository } from './transaction.repository';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionRepository]),
    AuthModule,
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule { }
