import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

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
  async home() {
    return {
      status: 'OK',
      version: this.appVersion,
    }
  }

  @Get('health')
  async healthCheck() {
    return {
      status: 'OK',
    }
  }
}
