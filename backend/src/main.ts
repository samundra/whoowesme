import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {createConnection} from "typeorm"

require('dotenv').config()
console.log({ port: process.env.PORT })

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables
const connection = await createConnection()
console.log({ connection })

const APPLICATION_PORT = 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(APPLICATION_PORT)
}

bootstrap()
