import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

require('dotenv').config()

const APPLICATION_PORT = process.env.PORT
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(APPLICATION_PORT)

  console.log(`Application started on http://localhost:${APPLICATION_PORT}`);
}

bootstrap()
