import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.guard'
import { ApiBody, ApiResponse } from '@nestjs/swagger'

interface AuthLoginParameters {
  username: string
  password: string
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    description: 'The token has been created successfully.',
    schema: {
      type: 'object',
      properties: {
        access_token: { type: 'string' },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'string' },
        message: { type: 'string' },
      },
    },
  })
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
