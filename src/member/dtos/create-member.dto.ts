import { CreatePersonDto } from '../../person/dto/create-person.dto';

export class CreateMemberDto extends CreatePersonDto {
  team_id: string | null;
  stats: Stats;
}

export class Stats {
  shots_on_goal: number;
}
