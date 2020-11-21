import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {})
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
    app.enableCors()
  } else {
    const allowedOriginForCors = process.env.SERVER_ORIGIN || 'http://api.whoowesme.local'
    app.enableCors({ origin: allowedOriginForCors })
  }

  const port = parseInt(process.env.PORT, 10) || 5000
  await app.listen(port);
}

bootstrap();
