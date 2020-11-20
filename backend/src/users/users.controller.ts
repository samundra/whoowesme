import { Body, Controller, Get, HttpStatus, Post, Res, SetMetadata, Request, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { RolesGuard } from '../roles.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { Response } from 'express'
import { User } from './entity/user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user
  }

  @Post('/register')
  @SetMetadata('roles', ['guest'])
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    await this.userService.create(createUserDto)

    res.status(HttpStatus.CREATED).json({
      code: 'WH001',
      message: `User has been created. Please verify your email "${createUserDto.email}" to continue.`,
    })
  }
}
