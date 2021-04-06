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
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private appLogger: ApiLogger,
  ) {
    this.appLogger.setContext('UsersService')
  }

  findAll(): Promise<User[]> {
    this.appLogger.log('Find all users')

    return this.usersRepository.find()
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

  async update(uuid: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({ uuid: uuid })
    if (!user) {
      throw new NotFoundException(`User #${uuid} not found`)
    }

    // If we have password request then update the password
    if (updateUserDto.password && updateUserDto.password.trim().length > 0) {
      updateUserDto.password = await hash(updateUserDto.password.trim())
    }

    const record = await this.usersRepository.preload({
      id: user.id,
      ...updateUserDto,
    })

    return this.usersRepository.save(record)
  }

  async changePassword(uuid: string, changePasswordDto: ChangePasswordDto): Promise<User> {
    const user = await this.usersRepository.findOne({ uuid: uuid })
    if (!user) {
      throw new NotFoundException(`User #${uuid} not found`)
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
