import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './models/base.entity';
import { TransactionsEntity } from './transactions/entities/Transaction.entity';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionsService } from './transactions/transactions.service';

require('dotenv').config()

@Module({
  imports: [TypeOrmModule.forRoot({
     type: "postgres",
     host: process.env.POSTGRES_HOST || 'localhost',
     port: +process.env.POSTGRES_PORT || 5432,
     username: process.env.POSTGRES_USER || 'postgres',
     password: process.env.POSTGRES_PASSWORD || 'postgres',
     database: process.env.POSTGRES_DATABASE || 'db_whoowesme',
     entities: [
        BaseEntity,
        TransactionsEntity
     ],
     synchronize: true

  }), TransactionsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, TransactionsService],
})
export class AppModule {}
