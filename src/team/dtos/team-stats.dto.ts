import { ApiProperty } from '@nestjs/swagger';

export class TeamStatsDto {
  @ApiProperty({ type: 'number', example: '4' })
  win: number;

  @ApiProperty({ type: 'number', example: '3' })
  loss: number;

  @ApiProperty({ type: 'number', example: '10' })
  players: number;

  @ApiProperty({ type: 'number', example: '5' })
  matches: number;
}
