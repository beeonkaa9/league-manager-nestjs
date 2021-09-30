import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreatePersonDto } from '../../person/dto/create-person.dto';

export class Stats {
  @ApiProperty()
  shots_on_goal: number;
}
export class CreateMemberDto extends CreatePersonDto {
  @ApiPropertyOptional()
  team_id: string | null;

  @ApiProperty()
  stats: Stats;
}
