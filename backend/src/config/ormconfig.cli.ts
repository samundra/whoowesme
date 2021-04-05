import { join } from 'path'
import { Transaction } from '../transactions/entity/transaction.entity'
import { User } from '../users/entity/user.entity'
import { config as dotEnvConfig } from 'dotenv'
import { ConnectionOptions } from 'typeorm'

dotEnvConfig({
  path: join(__dirname, '.env'),
  encoding: 'utf-8',
})

const cliOrmConfig = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number.parseInt(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'db_whoowesme',
  connectTimeoutMS: 1800,
  poolErrorHandler: error => {
    console.log('Connection Pool error in database')
    console.error(error)
    // Stop as we are unable to connect to database
    process.exit(2)
  },
  entities: [User, Transaction],
  dropSchema: false,
  synchronize: Boolean(process.env.DB_SYNCHRONIZE) || false,
  logger: process.env.NODE_ENV === 'production' ? 'file' : 'debug',
  logging: ['warn', 'query'],
  migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions

// We have to export = ormconfig otherwise it won't work when running with npm rum typeorm
// for details, see https://github.com/nestjs/nest/issues/4990#issuecomment-711444802
// This does not work --> export default ormconfig
export = cliOrmConfig
