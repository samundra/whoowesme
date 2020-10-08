import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

require('dotenv').config()

console.log({ port: process.env.PORT })

const APPLICATION_PORT = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(APPLICATION_PORT)
}

bootstrap()
