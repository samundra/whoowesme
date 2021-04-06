import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserMigration1617649163725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`)
    await queryRunner.query(`ALTER TABLE public.users ADD uuid uuid NULL DEFAULT gen_random_uuid();`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE public.users DROP COLUMN uuid;`)
    await queryRunner.query(`DROP EXTENSION "pgcrypto" CASCADE;`)
  }
}
