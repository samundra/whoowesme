import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { Transaction } from '../transactions/entity/transaction.entity'
import { User } from '../users/entity/user.entity'

export default (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST', 'localhost'),
  port: configService.get<number>('POSTGRES_PORT', 5432),
  username: configService.get('POSTGRES_USER', 'postgres'),
  password: configService.get('POSTGRES_PASSWORD', 'postgres'),
  database: configService.get('POSTGRES_DATABASE', 'db_whoowesme'),
  connectTimeoutMS: 60,
  poolErrorHandler: error => {
    console.log('Connection Pool error in database')
    console.error(error)
  },
  entities: [User, Transaction],
  logging: ['query'],
  logger: 'advanced-console',
  // Set it to false on production
  synchronize: configService.get<boolean>('DATABASE_SYNCHRONIZE', true),
})
