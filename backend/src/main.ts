require('dotenv').config()

import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

const APPLICATION_PORT = process.env.APPLICATION_PORT
// const APPLICATION_HOSTNAME = process.env.APPLICATION_HOSTNAME
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )
  await app.listen(APPLICATION_PORT, '0.0.0.0', () => {
    console.log(`Application started on port : ${APPLICATION_PORT}`)
  })
}

bootstrap()
