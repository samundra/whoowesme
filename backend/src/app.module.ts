import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransactionsModule } from './transactions/transactions.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import AuthConfig from './config/auth.config'
import { LoggerModule } from './logger/logger.module'
import TypeOrmConfig from './config/typeorm.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [AuthConfig],
      isGlobal: true,
      ignoreEnvFile: false, // explicitly load env from .env file
    }),
    TransactionsModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...TypeOrmConfig(configService),
      }),
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
