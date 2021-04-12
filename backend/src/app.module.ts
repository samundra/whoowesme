import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransactionsModule } from './transactions/transactions.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import AuthConfig from './config/auth.config'
import { LoggerModule } from './logger/logger.module'
import * as ormConfig from './config/ormconfig'

@Module({
  imports: [
    ConfigModule.forRoot({
      // Load env from .env.test for e2e test cases
      envFilePath: process.env.NODE_ENV == 'test' ? ['.env.test'] : ['.env'],
      load: [AuthConfig],
      isGlobal: true,
      ignoreEnvFile: false, // explicitly load env from .env file
      cache: true,
    }),
    TransactionsModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(ormConfig),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
