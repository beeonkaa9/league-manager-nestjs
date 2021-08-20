export class MemberStats {
  shots_on_goal: number;
}

export class CreateMemberDto {
  team_id: string;
  stats: MemberStats;
}
