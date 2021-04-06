import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterUsersMakeEmailUnique1617679945080 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE UNIQUE INDEX users_email_idx ON public.users USING btree (email);`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX public.users_email_idx;`)
  }
}
