import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  SetMetadata,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
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
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    schema: {
      type: 'object',
      example: {
        statusCode: '500',
        message: 'Internal server error',
      },
      properties: {
        statusCode: { type: 'string', default: 500 },
        message: { type: 'string', default: 'Internal server error' },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    schema: {
      type: 'object',
      example: {
        statusCode: '400',
        message: ['property firstName should not exist', 'property lastName should not exist'],
        error: 'Bad Request',
      },
      properties: {
        statusCode: { type: 'string', default: '400' },
        message: {
          type: 'array',
          title: 'array of error messages',
          items: { type: 'string' },
        },
        error: { type: 'string', default: 'Bad Request' },
      },
    },
  })
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    // TODO: Add logger here
    await this.userService.create(createUserDto)

    res.status(HttpStatus.CREATED).json({
      code: 'WH001',
      message: `User has been created. Please verify your email "${createUserDto.email}" to continue.`,
    })
  }
}
