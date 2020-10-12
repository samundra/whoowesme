import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Connection, Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection,
  ) {
  }

  async createMany(users: User[]) {
    const queryRunner = this.connection.createQueryRunner()

    await queryRunner.connect()
    await queryRunner.startTransaction()
    try {
      await queryRunner.manager.save(users[0])
      await queryRunner.manager.save(users[1])

      await queryRunner.commitTransaction()
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction()
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release()
    }
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}

