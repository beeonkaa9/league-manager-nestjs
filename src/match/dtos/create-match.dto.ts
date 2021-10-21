import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {
  @ApiProperty({
    type: 'uuid',
    example: '190b39a9-e6c7-4fe4-bcc6-e68ac854a1ef',
  })
  home: string;

  @ApiProperty({
    type: 'uuid',
    example: '7345bdff-3201-491e-89c3-662d8b3c3f16',
  })
  away: string;

  @ApiProperty({ type: 'int', example: '27' })
  home_score: number;

  @ApiProperty({ type: 'int', example: '16' })
  away_score: number;

  @ApiProperty({ type: 'timestamp', example: '2021-09-23T15:55:56+00:00' })
  played: string;

  @ApiProperty({ type: 'string', example: 'Young Park, Las Cruces, NM' })
  location: string;
}
