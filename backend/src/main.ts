import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {})
  // see https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', 1);

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

  app.enableCors({
    origin: [process.env.FRONTEND_ORIGIN],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  await app.listen(process.env.APP_PORT)
}

bootstrap()
