import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: true,
  });
  app.listen(port).then(() => { console.log(`App is listenring on : ${port}`); }).catch(e => { console.error(e) });
}

bootstrap();
