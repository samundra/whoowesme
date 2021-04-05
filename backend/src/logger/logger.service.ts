import { Logger, Injectable, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.TRANSIENT })
export class ApiLogger extends Logger {
  log(message: string, ctx?: string) {
    super.log(message, ctx)
  }
  error(message: string, trace: string, ctx?: string) {
    super.error(message, trace, ctx)
  }
  warn(message: string, ctx?: string) {
    super.warn(message, ctx)
  }
  debug(message: string, ctx?: string) {
    super.debug(message, ctx)
  }
  verbose(message: string, ctx?: string) {
    super.verbose(message, ctx)
  }
}
