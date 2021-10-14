import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDb1630001376375 implements MigrationInterface {
  name = 'initDb1630001376375';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`GRANT CONNECT ON DATABASE "league" TO "apiuser"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "leaguemanager"`);
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(
      `ALTER ROLE "apiuser" SET search_path TO "leaguemanager","public"`,
    );
    await queryRunner.query(
      `GRANT USAGE ON SCHEMA public, leaguemanager TO "apiuser"`,
    );
    await queryRunner.query(
      `ALTER DEFAULT PRIVILEGES IN SCHEMA public, leaguemanager GRANT ALL ON TABLES TO "apiuser"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SCHEMA IF EXISTS "leaguemanager" CASCADE`);
  }
}
