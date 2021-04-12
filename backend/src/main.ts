import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger'
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface'
import { AppModule } from './app.module'
import { ApiLogger } from './logger/logger.service'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useLogger(new ApiLogger())

  // see https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', 1)

  app.setGlobalPrefix('v1')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      forbidUnknownValues: true,
    }),
  )

  app.enableCors({
    origin: [process.env.FRONTEND_ORIGIN, 'https://whooweme.netlify.app', 'http://localhost:5000'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const config = new DocumentBuilder()
    .setTitle('Whoowesme API')
    .setDescription('All API')
    .addServer('http://whoapi.samundra.com.np', 'v1')
    .addBearerAuth()
    .setVersion('1.0.0')
    .build()

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'API Specs',
  }

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document, customOptions)

  // Starts listening for shutdown hooks
  // Enable with caution: https://docs.nestjs.com/fundamentals/lifecycle-events#application-shutdown
  // app.enableShutdownHooks()

  const port = +process.env.APP_PORT || 5000
  await app.listen(port)
}

bootstrap()
