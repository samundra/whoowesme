import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from '../auth/auth.module'
import { TransactionsController } from './transactions.controller'
import { TransactionsService } from './transactions.service'
import { Transaction } from './entity/transaction.entity'
import { LoggerModule } from '../logger/logger.module'

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), AuthModule, LoggerModule],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
