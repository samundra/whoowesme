import {
  Body,
  HttpCode,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
  Res,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common'
import { GetUser } from '../auth/get-user.decorator'

import { User } from '../users/entity/user.entity'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { Transaction } from './entity/transaction.entity'
import { TransactionsService } from './transactions.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { PaginationQueryDto } from '../common/pagination-query.dto'
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger'
import { Response } from 'express'

interface GetTransactionsResponse {
  statusCode: number
  message: string
  result?: Transaction[]
}

@ApiBearerAuth()
@ApiTags('transactions')
@Controller('transactions')
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      type: 'object',
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
      properties: {
        statusCode: { type: 'number', default: 401 },
        message: { type: 'string', default: 'Unauthorized' },
      },
    },
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'List of transactions',
    schema: {
      type: 'object',
      example: {
        statusCode: 200,
        message: 'List of all transactions',
        result: [
          {
            id: '2c6d4624-2d26-48db-83f7-0f09cd22c0bf',
            amount: '323.00',
            description: 'adfadf',
            date: '2021-04-12T11:55:04.169Z',
            createdAt: '2021-04-16T09:08:28.436Z',
            categories: ['gym'],
            userId: '188a4863-aea2-46dd-922f-749fef43638a',
          },
        ],
      },
      properties: {
        statusCode: { type: 'number', default: 200 },
        message: { type: 'string', default: 'List of all transactions' },
        result: {
          type: 'array',
          title: 'List of all transactions',
          items: {
            properties: {
              id: { type: 'string' },
              amount: { type: 'string' },
              description: { type: 'string' },
              date: { type: 'boolean' },
              createdAt: { type: 'date' },
              userId: { type: 'string' },
              categories: {
                type: 'array',
                title: 'category array',
                items: { type: 'string' },
              },
            },
          },
        },
      },
    },
  })
  @Get('/')
  async findAll(
    @Res() res: Response,
    @GetUser() user: User,
    @Query() paginationQueryDto: PaginationQueryDto,
  ): Promise<Response<GetTransactionsResponse>> {
    const transactions = await this.transactionsService.getTransactions(user, paginationQueryDto)

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'List of transactions',
      result: transactions,
    })
  }

  @Get('/:id')
  async getTransactionById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @GetUser() user: User,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Transaction record',
      result: await this.transactionsService.getTransactionById(id, user),
    })
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  async createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
    @GetUser() user: User,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.CREATED).json({
      statusCode: 201,
      message: 'Transaction created successfully.',
      result: await this.transactionsService.create(createTransactionDto, user),
    })
  }

  @Delete('/:id')
  @HttpCode(204)
  @UsePipes(ValidationPipe)
  async deleteTransaction(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @GetUser() user: User,
    @Res() res: Response,
  ) {
    try {
      await this.transactionsService.getTransactionById(id, user)

      return this.transactionsService.delete(id, user)
    } catch (e) {
      if (e.status) {
        return res.status(e.response.statusCode).json({
          statusCode: e.response.statusCode,
          message: e.response.message,
          error: e.response.error,
        })
      }

      // TODO: log error to log storage
      console.error(e)

      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: 'Something went wrong. please try again later.',
        error: 'Unknown error',
      })
    }
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async updateTransaction(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @GetUser() user: User,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Transaction updated successfully.',
      result: await this.transactionsService.update(id, updateTransactionDto, user),
    })
  }
}
