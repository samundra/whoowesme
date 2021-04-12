import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { UsersService } from '../users/users.service'

interface JwtPayload {
  email: string
  sub: string
  iat: number
  exp: number
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService, private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRETS'),
    })
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findOne(payload.email)

    if (!user) {
      throw new UnauthorizedException()
    }

    return Object.assign({}, user, { password: undefined })
  }
}
