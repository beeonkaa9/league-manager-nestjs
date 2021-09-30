import { ApiProperty } from '@nestjs/swagger';

export class TeamStatsDto {
  @ApiProperty()
  win: number;

  @ApiProperty()
  loss: number;

  @ApiProperty()
  players: number;

  @ApiProperty()
  matches: number;
}
