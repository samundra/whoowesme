import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger'
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {})
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
    }),
  )

  app.enableCors({
    origin: [process.env.FRONTEND_ORIGIN],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const config = new DocumentBuilder()
    .setTitle('Whoowesme API')
    .setDescription('All API')
    .addServer('https://api.whoowesme.local/v1/', 'v1')
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

  const port = +process.env.APP_PORT || 5000
  await app.listen(port)
}

bootstrap()
