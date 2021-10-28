import { ApiProperty } from '@nestjs/swagger';

export enum Entity {
  Team = 'TEAM',
  Match = 'MATCH',
  Person = 'PERSON',
}

export enum Action {
  Add = 'ADD',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

export class CreateAuditDto {
  @ApiProperty({
    type: 'string',
    example: '54b8e3ed-4537-49c4-b302-fec15c17ad6c',
  })
  id: string;

  @ApiProperty({ enum: ['Team', 'Match', 'Person'] })
  entity: Entity;

  @ApiProperty({ enum: ['Add', 'Update', 'Delete'] })
  action: Action;

  @ApiProperty({
    type: 'json',
    example: {
      name: 'Change',
      last_name: 'Me',
      phone: '0007778811',
      email: 'cm@changemail.com',
      dob: '02/14/1998',
      role: 'Manager',
      status: 'Inactive',
      age: 21,
      team_id: '18eeebef-9dc5-435c-ac52-1311b335c96e',
      stats: '{shots-on-goal: 21}',
    },
  })
  new_value: any;

  @ApiProperty({ type: 'string', example: '2021-09-23T15:55:56+00:00' })
  modified_at: string;
}
