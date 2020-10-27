import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule, {});
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

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    const allowedOriginForCors = process.env.SERVER_ORIGIN || serverConfig.origin;
    app.enableCors({ origin: allowedOriginForCors });
  }

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
}

bootstrap()
