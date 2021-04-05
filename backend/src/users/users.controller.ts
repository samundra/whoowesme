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
  Logger,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { RolesGuard } from '../roles.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { Response } from 'express'
import { User } from './entity/user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ApiTags, ApiResponse, ApiHeader, ApiBearerAuth } from '@nestjs/swagger'

@ApiTags('users')
@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  private readonly logger = new Logger(UsersController.name)

  constructor(private userService: UsersService) {}

  @Get('/')
  @ApiHeader({
    name: 'Authorization',
    description: 'Authorization token',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      type: 'object',
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
      properties: {
        statusCode: { type: 'string', default: 401 },
        message: { type: 'string', default: 'Unauthorized' },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    return await this.userService.findAll()
  }

  @Get('me')
  @ApiHeader({
    name: 'Authorization',
    description: 'Authorization token',
  })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Profile Information about currently logged in user.' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      type: 'object',
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
      properties: {
        statusCode: { type: 'string', default: 401 },
        message: { type: 'string', default: 'Unauthorized' },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
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
        message: ['firstName must be a string', 'email must be an email'],
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
    this.logger.log('User register')
    // TODO: Log request body for debugging purpose
    await this.userService.create(createUserDto)

    res.status(HttpStatus.CREATED).json({
      code: 'WH001',
      message: `User has been created. Please verify your email "${createUserDto.email}" to continue.`,
    })
  }
}
