import { Person } from 'src/person/models/person.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Member extends Person {
  @Column()
  private team_id: string | null;
  get getTeamId(): string | null {
    return this.team_id;
  }

  @Column()
  private stats: Stats;
  get getStats(): Stats {
    return this.stats;
  }
}

export interface Stats {
  shots_on_goal: number;
}
