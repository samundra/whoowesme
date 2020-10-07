import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const APPLICATION_PORT = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APPLICATION_PORT);
}

bootstrap();
