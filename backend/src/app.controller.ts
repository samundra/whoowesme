import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiResponse } from '@nestjs/swagger'

@Controller()
export class AppController {
  /**
   * Api Version
   * @private
   */
  private readonly appVersion

  /**
   * Constructor
   * @param configService
   */
  constructor(configService: ConfigService) {
    this.appVersion = configService.get<string>('APP_VERSION', '1.0.0')
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'Get Home successfully',
    schema: {
      type: 'object',
      example: {
        status: 'OK',
        version: '1.0.0',
      },
      properties: {
        status: { type: 'string' },
        version: { type: 'string' },
      },
    },
  })
  async home() {
    return {
      status: 'OK',
      version: this.appVersion,
    }
  }

  @Get('/health')
  @ApiResponse({
    status: 200,
    description: 'Healthcheck endpoint',
    schema: {
      type: 'object',
      example: {
        status: 'OK',
      },
      properties: {
        status: {
          type: 'object',
        },
      },
    },
  })
  async healthCheck() {
    return {
      status: 'OK',
    }
  }
}
