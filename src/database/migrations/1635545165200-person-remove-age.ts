import { MigrationInterface, QueryRunner } from 'typeorm';

export class personRemoveAge1635545165200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "age"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" ALTER COLUMN "age" SET NOT NULL`,
    );
  }
}
