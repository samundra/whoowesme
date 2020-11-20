import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { UserLoginDto } from '../users/dto/user-login.dto'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: UserLoginDto) {
    const payload = { email: user.email, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
