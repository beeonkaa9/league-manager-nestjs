import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum teamStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
export class CreateTeamDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  coach: string;

  @ApiPropertyOptional()
  captain: string | null;

  @ApiProperty()
  status: teamStatus;
}
