import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { UserLoginDto } from '../users/dto/user-login.dto'
import { compare } from '../common/password-hash'
import { User } from '../users/entity/user.entity'
import { Transaction } from '../transactions/entity/transaction.entity'

export type AuthenticatedUser =
  | Omit<User, 'password'>
  | {
      transactions: Transaction[]
    }

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<AuthenticatedUser> {
    const user = await this.usersService.findOne(email)
    if (user && (await compare(pass, user.password))) {
      // @ts-ignore: _unusedPassword is not used
      const { _unusedPassword, ...result } = user

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
