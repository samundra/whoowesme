import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entity/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ email: email });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async create(createUserDto: CreateUserDto) : Promise<User> {
    return await this.usersRepository.save(createUserDto)
  }
}
