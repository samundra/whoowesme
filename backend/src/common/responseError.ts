import { HttpStatus } from '@nestjs/common'
import { Response } from 'express'

const responseError = (error: Error, res: Response) => {
  if (typeof error === 'string') {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      message: error,
    })
  }

  res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
    statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    message: error.message,
  })
}

export default responseError
