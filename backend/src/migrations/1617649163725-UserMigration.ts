import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserMigration1617649163725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE public.users ADD uuid uuid NULL;`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE public.users DROP COLUMN uuid;`)
  }
}
