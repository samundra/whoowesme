import { join } from 'path'
import { Transaction } from '../transactions/entity/transaction.entity'
import { User } from '../users/entity/user.entity'
import { config as dotEnvConfig } from 'dotenv'
import { ConnectionOptions } from 'typeorm'

// We cannot use NestJS DI to inject ConfigService for that reason we have to
// manually load env vars
const envFilePath =
  process.env.NODE_ENV === 'test'
    ? join(__dirname, '..', '..', '.env.test')
    : join(__dirname, '..', '..', '.env')

const { error } = dotEnvConfig({
  path: envFilePath,
  encoding: 'utf-8',
  debug: undefined, // setting it to undefined will treat it as false
})

if (error) {
  console.error(`Error while loading env from environment file ${envFilePath}`)
  console.error(error)
}

const ormConfig = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  connectTimeoutMS: parseInt(process.env.POSTGRES_DB_TIMEOUT, 10) || 10 * 1000,
  poolErrorHandler: error => {
    console.log('Connection Pool error in database')
    console.error(error)
    // Stop as we are unable to connect to database
    process.exit(2)
  },
  entities: [User, Transaction],
  dropSchema: false,
  synchronize: !!process.env.DB_SYNCHRONIZE,
  logger: process.env.NODE_ENV === 'production' ? 'file' : 'debug',
  logging: ['warn', 'query'],
  migrations: [join(__dirname, '../migrations/*.ts')],
  cli: {
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions

// We have to export = ormconfig otherwise it won't work when running with npm rum typeorm
// for details, see https://github.com/nestjs/nest/issues/4990#issuecomment-711444802
// This does not work --> export default ormconfig
export = ormConfig
