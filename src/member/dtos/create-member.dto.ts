import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreatePersonDto } from '../../person/dto/create-person.dto';

export class Stats {
  @ApiProperty({ type: 'json', example: '{shots-on-goal: 21}' })
  shots_on_goal: number;
}
export class CreateMemberDto extends CreatePersonDto {
  @ApiPropertyOptional({
    type: 'uuid',
    example: '18eeebef-9dc5-435c-ac52-1311b335c96e',
  })
  team_id: string | null;

  @ApiPropertyOptional({ type: 'json', example: '{shots-on-goal: 21}' })
  stats: Stats;
}
