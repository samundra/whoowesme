import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/')
  async home() {
    return {
      status: 'OK',
      version: '0.0.2',
    }
  }

  @Get('health')
  async healthCheck() {
    return 'OK'
  }
}
