import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMatchDto {
  @ApiPropertyOptional()
  id: string;

  @ApiProperty()
  home: string;

  @ApiProperty()
  away: string;

  @ApiProperty()
  home_score: number;

  @ApiProperty()
  away_score: number;

  @ApiProperty()
  played: string;

  @ApiProperty()
  location: string;
}
