import { HttpStatus } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions'

export class PasswordMismatchException extends HttpException {
  constructor() {
    super('Old password do not match', HttpStatus.UNPROCESSABLE_ENTITY)
  }
}
