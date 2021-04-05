import { Module } from '@nestjs/common'
import { ApiLogger } from './logger.service'

@Module({
  providers: [ApiLogger],
  exports: [ApiLogger],
})
export class LoggerModule {}
