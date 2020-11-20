import {
  Body,
  Controller,
  Get, HttpStatus,
  Post, Res,
  SetMetadata,
  UseGuards,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { RolesGuard } from '../roles.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { Response } from 'express'
// import { CreateTransactionDto } from '../transactions/dto/transaction.dto'

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Get('/')
  async findAll(): Promise<string> {
    const users = await this.userService.findAll()
    console.log({ users })
    return 'This is all users'
  }

  @Post('/register')
  @SetMetadata('roles', ['guest'])
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    this.userService.create(createUserDto)

    res.status(HttpStatus.CREATED).json({
      code: 'WH001',
      message: `User has been created. Please verify your email "${createUserDto.email}" to continue.`,
    })
  }

  // @Post('/transaction')
  // @SetMetadata('roles', ['guest'])
  // async addTransaction(@Body() createTransactionDto: CreateTransactionDto, @Res() res: Response) {
  //   this.userService.createTransaction(createTransactionDto);
  //
  //   res.status(HttpStatus.CREATED).json({
  //     code: 'WH002',
  //     message: 'Transaction added successfully',
  //   })
  // }
}
