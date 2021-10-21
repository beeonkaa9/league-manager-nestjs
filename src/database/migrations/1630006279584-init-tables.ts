import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class initTables1630006279584 implements MigrationInterface {
  name = 'initTables1630006279584';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'person',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'last_name',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'character varying',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'email',
            type: 'character varying',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'dob',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'enum',
            enum: [
              'Manager',
              'Coach',
              'Referee',
              'Linesman',
              'MedicalStaff',
              'Captain',
              'ScoreKeeper',
              'Goalkeeper',
              'RightFullback',
              'LeftFullback',
              'CenterBack',
              'Sweeper',
              'DefendingMidfielder',
              'RightMidfielder',
              'CentralMidfielder',
              'Striker',
              'AttackingMidfielder',
              'LeftMidfielder',
            ],
            enumName: 'roleEnum',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['Active', 'Inactive', 'Suspended'],
            enumName: 'statusEnum',
            isNullable: true,
          },
          {
            name: 'age',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'team_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'stats',
            type: 'json',
            isNullable: true,
          },
          {
            name: 'type',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'team',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'character varying',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'coach',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'captain',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['Active', 'Inactive'],
            enumName: 'teamEnum',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'match',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'home',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'away',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'home_score',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'away_score',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'played',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'location',
            type: 'character varying',
            isNullable: false,
          },
        ],
      }),
    );

    //create all the foreign keys for the tables
    await queryRunner.createForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['team_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'team',
        onDelete: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'match',
      new TableForeignKey({
        columnNames: ['home'],
        referencedColumnNames: ['id'],
        referencedTableName: 'team',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'match',
      new TableForeignKey({
        columnNames: ['away'],
        referencedColumnNames: ['id'],
        referencedTableName: 'team',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'team',
      new TableForeignKey({
        columnNames: ['coach'],
        referencedColumnNames: ['id'],
        referencedTableName: 'person',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'team',
      new TableForeignKey({
        columnNames: ['captain'],
        referencedColumnNames: ['id'],
        referencedTableName: 'person',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const personTable = await queryRunner.getTable('person');
    const matchTable = await queryRunner.getTable('match');
    const teamTable = await queryRunner.getTable('team');
    const personForeignKey = personTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('team_id') !== -1,
    );
    const matchForeignKey1 = matchTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('home') !== -1,
    );
    const matchForeignKey2 = matchTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('away') !== -1,
    );
    const teamForeignKey1 = teamTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('coach') !== -1,
    );
    const teamForeignKey2 = teamTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('captain') !== -1,
    );
    await queryRunner.dropForeignKey('person', personForeignKey);
    await queryRunner.dropForeignKey('match', matchForeignKey1);
    await queryRunner.dropForeignKey('match', matchForeignKey2);
    await queryRunner.dropForeignKey('team', teamForeignKey1);
    await queryRunner.dropForeignKey('team', teamForeignKey2);
    await queryRunner.dropTable('person');
    await queryRunner.dropTable('team');
    await queryRunner.dropTable('match');
  }
}
