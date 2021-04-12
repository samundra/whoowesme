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
  Patch,
  Query,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { RolesGuard } from '../roles.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { Response } from 'express'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ApiTags, ApiResponse, ApiHeader, ApiBearerAuth } from '@nestjs/swagger'
import { UpdateUserDto } from './dto/update-user.dto'
import { hash } from '../common/password-hash'
import { ChangePasswordDto } from './dto/change-password.dto'
import responseError from '../common/responseError'
import { GetUser } from '../auth/get-user.decorator'
import { PaginationQueryDto } from '../common/pagination-query.dto'
import { User } from './entity/user.entity'

@ApiTags('users')
@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  private readonly logger = new Logger(UsersController.name)

  constructor(private userService: UsersService) {}

  @Get()
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'List of users',
    schema: {
      type: 'object',
      example: {
        statusCode: 200,
        message: 'List of all users',
        result: [
          {
            firstName: 'firstname',
            lastName: 'lastname',
            email: 'loggedinuser@whoowesme.io',
            isActive: true,
            uuid: '69542907-aa35-404b-b8b7-67a3f93a5xxx',
          },
        ],
      },
      properties: {
        statusCode: { type: 'number', default: 200 },
        message: { type: 'string', default: 'Loggedin user Information' },
        result: {
          type: 'array',
          title: 'List of all users',
          items: {
            properties: {
              firstName: { type: 'string' },
              lastName: { type: 'string' },
              email: { type: 'string' },
              isActive: { type: 'boolean' },
              uuid: { type: 'uuid' },
            },
          },
        },
      },
    },
  })
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
        statusCode: { type: 'number', default: 401 },
        message: { type: 'string', default: 'Unauthorized' },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async findAll(
    @Res() res: Response,
    @Query() paginationQueryDto: PaginationQueryDto,
  ): Promise<Response<{ statusCode: number; message: string; result: Omit<User, 'password'>[] }>> {
    const users = await this.userService.findAll(paginationQueryDto)

    // Remove password from user information
    const usersList = users.map(u => Object.assign(u, { password: undefined })) as Omit<User, 'password'>[]

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'List of users',
      result: usersList,
    })
  }

  @Get('me')
  @ApiHeader({ name: 'Authorization', description: 'Authorization token' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Profile Information about currently logged in user.',
    schema: {
      type: 'object',
      example: {
        statusCode: 200,
        message: 'Loggedin User information',
        result: {
          firstName: 'firstname',
          lastName: 'lastname',
          email: 'loggedinuser@whoowesme.io',
          isActive: true,
          uuid: '69542907-aa35-404b-b8b7-67a3f93a5xxx',
        },
      },
      properties: {
        statusCode: { type: 'number', default: 200 },
        message: { type: 'string', default: 'Loggedin user Information' },
        result: {
          type: 'object',
          properties: {
            firstName: { type: 'string' },
            LastName: { type: 'string' },
            email: { type: 'string' },
            isActive: { type: 'boolean' },
            uuid: { type: 'uuidv4' },
          },
        },
      },
    },
  })
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
        statusCode: { type: 'number', default: 401 },
        message: { type: 'string', default: 'Unauthorized' },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req, @Res() res: Response) {
    const user = await this.userService.findOne(req.user.email)
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'User profile',
      result: user,
    })
  }

  @Post('/register')
  @SetMetadata('roles', ['guest'])
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 201,
    description: 'User has been registered successfully.',
    schema: {
      type: 'object',
      example: {
        statusCode: 201,
        message: 'User has been created. Please verify your email "test@gmail.com" to continue.',
        result: {
          firstName: 'newly',
          lastName: 'registered_user',
          email: 'registereduser@whoowesme.io',
          isActive: true,
          uuid: '69542907-aa35-404b-b8b7-67a3f93a5d79',
        },
      },
      properties: {
        statusCode: { type: 'number', default: 201 },
        message: { type: 'string' },
        result: {
          type: 'object',
          properties: {
            firstName: { type: 'string' },
            LastName: { type: 'string' },
            email: { type: 'string' },
            isActive: { type: 'boolean' },
            uuid: { type: 'uuidv4' },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    schema: {
      type: 'object',
      example: {
        statusCode: 500,
        message: 'Internal server error',
      },
      properties: {
        statusCode: { type: 'number', default: 500 },
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
        statusCode: 400,
        message: ['firstName must be a string', 'email must be an email'],
        error: 'Bad Request',
      },
      properties: {
        statusCode: { type: 'string', default: 400 },
        message: {
          type: 'array',
          title: 'array of error messages',
          items: { type: 'string' },
        },
        error: { type: 'number', default: 'Bad Request' },
      },
    },
  })
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    this.logger.log('User register')
    try {
      const registeredUser = await this.userService.create({
        ...createUserDto,
        password: await hash(createUserDto.password),
      })
      const result = Object.assign({}, registeredUser, { password: null })

      delete result.password
      delete result.id

      res.status(HttpStatus.CREATED).json({
        statusCode: 201,
        message: `User has been created. Please verify your email "${createUserDto.email}" to continue.`,
        result: result,
      })
    } catch (error) {
      this.logger.error(error.message)
      if (error.message.indexOf('duplicate key value violates') > -1) {
        res.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: `Email ${createUserDto.email} already exists. Please use different email to regsiter.`,
          error: `Email already exists.`,
        })
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        })
      }
    }
  }

  @Patch('/')
  @ApiBearerAuth()
  @ApiHeader({ name: 'Authorization', description: 'Authorization token' })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'User information updated successfully.',
    schema: {
      type: 'object',
      title: 'response.data',
      example: {
        statusCode: 200,
        message: 'User information updated successfully.',
        result: {
          firstName: 'Sam',
          lastName: 'Shr',
          email: 'test3dd3kk33@example.com',
          isActive: true,
          uuid: '7eeee115-4df0-4159-9a96-b17815625a68',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    schema: {
      title: 'error.response.data',
      type: 'object',
      example: {
        statusCode: 400,
        message: ['property password should not exist'],
        error: 'Bad Request',
      },
      properties: {
        statusCode: { type: 'string', default: '400' },
        message: {
          type: 'array',
          title: 'array',
          items: { type: 'string' },
        },
        error: { type: 'string', default: 'Bad Request' },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    schema: {
      type: 'object',
      example: {
        statusCode: '500',
        message: 'Internal server error',
      },
    },
  })
  async update(@Body() updateUserDto: UpdateUserDto, @GetUser() u, @Res() res: Response) {
    this.logger.log(`Update User: ${JSON.stringify(u)}`)
    const user = await this.userService.update(u.id, updateUserDto)

    // Delete record that are not needed
    const result = Object.assign({}, { ...user })
    delete result.password
    delete result.id

    res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'User information updated successfully.',
      result: result,
    })
  }

  @ApiBearerAuth()
  @ApiHeader({ name: 'Authorization', description: 'Authorization token' })
  @Post('/change-password')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Password changed successfully',
    schema: {
      type: 'object',
      title: 'error.response.data',
      example: {
        statusCode: 200,
        message: 'Password updated successfully.',
      },
    },
  })
  @ApiResponse({
    status: 422,
    description: 'Unprocessable Entity',
    schema: {
      type: 'object',
      title: 'error.response.data',
      example: {
        statusCode: 422,
        message: 'Old password do not match',
        error: 'Old password do not match',
      },
    },
  })
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @GetUser() u: User,
    @Res() res: Response,
  ) {
    this.logger.log(`Change password requested for user: ${u.id}`)

    try {
      const user = await this.userService.changePassword(u.id, changePasswordDto)
      // Delete record that are not needed
      const result = Object.assign({}, { ...user, password: undefined, id: undefined })

      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Password updated successfully.',
      })
    } catch (error) {
      responseError(error, res)
    }
  }
}
