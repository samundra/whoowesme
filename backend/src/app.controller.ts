import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service'
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @Get('health')
  async healthCheck() {
    return 'OK'
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  // Use @UseGuards(JwtAuthGuard) to have jwt verified access_token checks
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
