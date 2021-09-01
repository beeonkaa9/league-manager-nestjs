import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDb1630001376375 implements MigrationInterface {
  name = 'initDb1630001376375';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`GRANT CONNECT ON DATABASE "league" TO "apiuser"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "member"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "person"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "team"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "match"`);
    await queryRunner.query(
      `ALTER ROLE "apiuser" SET search_path TO public, member, person, team, match`,
    );
    await queryRunner.query(
      `GRANT USAGE ON SCHEMA public, member, person, team, match TO "apiuser"`,
    );
    await queryRunner.query(
      `ALTER DEFAULT PRIVILEGES IN SCHEMA public, member, person, team, match GRANT ALL ON TABLES TO "apiuser"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SCHEMA IF EXISTS "member" CASCADE`);
    await queryRunner.query(`DROP SCHEMA IF EXISTS "person" CASCADE`);
    await queryRunner.query(`DROP SCHEMA IF EXISTS "team" CASCADE`);
    await queryRunner.query(`DROP SCHEMA IF EXISTS "match" CASCADE`);
  }
}
