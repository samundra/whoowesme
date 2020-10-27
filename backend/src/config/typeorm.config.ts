import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions =
{
  type: 'postgres',
  host: process.env.POSTGRES_HOST || dbConfig.host,
  port: process.env.POSTGRES_PORT || dbConfig.port,
  username: process.env.POSTGRES_USER || dbConfig.username,
  password: process.env.POSTGRES_PASSWORD || dbConfig.password,
  database: process.env.POSTGRES_DATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  logging: ['query'],
  logger: 'advanced-console',
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
}