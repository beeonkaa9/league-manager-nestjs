import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDb1630001376375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `GRANT "connect" ON DATABASE "league" TO "apiuser";`,
    );
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS member');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS person');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS team');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS match');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
