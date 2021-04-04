import { Body, Controller, Get, HttpStatus, Post, Res, SetMetadata, Request, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { RolesGuard } from '../roles.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { Response } from 'express'
import { User } from './entity/user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ApiTags, ApiResponse, ApiUnauthorizedResponse, ApiHeader } from '@nestjs/swagger'

@ApiTags('users')
@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll()
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Authorization token',
  })
  @ApiResponse({ status: 200, description: 'Return currently active user profile' })
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return await this.userService.findOne(req.user.email)
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
