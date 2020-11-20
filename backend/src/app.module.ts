import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BaseEntity } from './models/base.entity'
import { Transaction } from './transactions/transaction.entity'
import { TransactionsModule } from './transactions/transactions.module'
import { UsersModule } from './users/users.module'
import { User } from './users/user.entity'
import { Connection } from 'typeorm'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.POSTGRES_PORT || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DATABASE || 'db_whoowesme',
      entities: [BaseEntity, Transaction, User],
      logging: ['query'],
      logger: 'advanced-console',
      autoLoadEntities: true,
      // Set to false for production
      synchronize: true,
    }),
    TransactionsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
