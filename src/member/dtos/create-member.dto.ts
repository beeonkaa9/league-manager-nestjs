export class CreateMemberDto {
  team_id: string | null;
  stats: Stats;
}

export class Stats {
  shots_on_goal: number;
}
