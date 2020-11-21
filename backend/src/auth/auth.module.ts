import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { ConfigModule } from '@nestjs/config'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule,
    // DefaultStrategy
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => ({
          secret: configService.get('JWT_SECRETS'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_TOKEN_EXPIRES', '1h'),
          },
      })
    }),
    UsersModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [],
  controllers: [AuthController],
})

export class AuthModule {}
