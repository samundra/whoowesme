import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiResponse } from '@nestjs/swagger'
import * as Package from '../package.json'

@Controller()
export class AppController {
  /**
   * Api Version
   * @private
   */
  private readonly appVersion: string

  /**
   * Constructor
   * @param configService
   */
  constructor(configService: ConfigService) {
    this.appVersion = configService.get<string>('APP_VERSION', Package.version)
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'Root endpoint',
    schema: {
      type: 'object',
      example: {
        status: 'OK',
        version: Package.version,
      },
      properties: {
        status: { type: 'string', default: 'OK' },
        version: { type: 'string', default: Package.version },
      },
    },
  })
  home() {
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
        status: { type: 'string', default: 'OK' },
      },
    },
  })
  healthCheck() {
    return {
      status: 'OK',
    }
  }
}
