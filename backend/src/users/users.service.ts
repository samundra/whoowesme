import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entity/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiLogger } from '../logger/logger.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { compare, hash } from 'src/common/password-hash'
import { ChangePasswordDto } from './dto/change-password.dto'
import { PasswordMismatchException } from 'src/exceptions/PasswordMismatchException'
import { PaginationQueryDto } from 'src/common/pagination-query.dto'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private logger: ApiLogger,
  ) {
    this.logger.setContext('UsersService')
  }

  findAll(paginationQueryDto: PaginationQueryDto): Promise<User[]> {
    const { offset, limit } = paginationQueryDto
    this.logger.log(`Find all users, offset: ${offset}, limit: ${limit}`)

    return this.usersRepository.find({
      skip: offset ?? 0,
      take: limit ?? 10,
    })
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ email: email })
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.create(createUserDto)

    const record = await this.usersRepository.save(user)
    return this.usersRepository.findOne({ id: record.id })
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({ id: id })
    if (!user) {
      throw new NotFoundException(`User #${id} not found`)
    }

    const record = await this.usersRepository.preload({
      id: user.id,
      ...updateUserDto,
    })

    return this.usersRepository.save(record)
  }

  async changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<User> {
    const user = await this.usersRepository.findOne({ id: id })
    if (!user) {
      throw new NotFoundException(`User #${id} not found`)
    }

    // Check old password
    const passwordMatch = await compare(changePasswordDto.oldPassword, user.password)
    if (false === passwordMatch) {
      throw new PasswordMismatchException()
    }

    // If we have password request then update the password
    if (changePasswordDto.newPassword && changePasswordDto.newPassword.trim().length > 0) {
      const record = await this.usersRepository.preload({
        id: user.id,
        password: await hash(changePasswordDto.newPassword),
      })

      return this.usersRepository.save(record)
    }
  }
}
