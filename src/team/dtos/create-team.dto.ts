import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum teamStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
export class CreateTeamDto {
  @ApiPropertyOptional({
    type: 'uuid',
    example: '190b39a9-e6c7-4fe4-bcc6-e68ac854a1ef',
  })
  id: string;

  @ApiProperty({ type: 'string', example: 'ECG Team' })
  name: string;

  @ApiProperty({
    type: 'uuid',
    example: '7345bdff-3201-491e-89c3-662d8b3c3f16',
  })
  coach: string;

  @ApiPropertyOptional({
    type: 'uuid',
    example: '190b39a9-e6c7-4fe4-bcc6-e68ac854a1ef',
  })
  captain: string | null;

  @ApiProperty({ enum: ['Active', 'Inactive'] })
  status: teamStatus;
}
