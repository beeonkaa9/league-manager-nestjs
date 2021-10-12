import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum Role {
  Manager = 'MANAGER',
  Coach = 'COACH',
  Referee = 'REFEREE',
  Linesman = 'LINESMAN',
  MedicalStaff = 'MEDICALSTAFF',
  Captain = 'CAPTAIN',
  ScoreKeeper = 'SCOREKEEPER',
  Goalkeeper = 'GOALKEEPER',
  RightFullback = 'RIGHTFULLBACK',
  LeftFullback = 'LEFTFULLBACK',
  CenterBack = 'CENTERBACK',
  Sweeper = 'SWEEPER',
  DefendingMidfielder = 'DEFENDINGMIDFIELDER',
  RightMidfielder = 'RIGHTMIDFIELDER',
  CentralMidfielder = 'CENTRALMIDFIELDER',
  Striker = 'STRIKER',
  AttackingMidfielder = 'ATTACKINGMIDFIELDER',
  LeftMidfielder = 'LEFTMIDFIELDER',
}

export enum Status {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
  suspended = 'SUSPENDED',
}

export class CreatePersonDto {
  @ApiPropertyOptional({
    type: 'uuid',
    example: '190b39a9-e6c7-4fe4-bcc6-e68ac854a1ef',
  })
  id: string;

  @ApiProperty({ type: 'string', example: 'Mona' })
  name: string;

  @ApiProperty({ type: 'string', example: 'Lisa' })
  last_name: string;

  @ApiPropertyOptional({ type: 'int', example: '9157778811' })
  phone: number;

  @ApiPropertyOptional({ type: 'string', example: 'example@mail.com' })
  email: string;

  @ApiProperty({ type: 'date', example: '11/11/1999' })
  dob: string;

  @ApiProperty({
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
  })
  role: Role;

  @ApiPropertyOptional({ enum: ['Active', 'Inactive', 'Suspended'] })
  status: Status;

  @ApiPropertyOptional({ type: 'number', example: '21' })
  age: number;
}
