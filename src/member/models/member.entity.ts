import { Person } from '../../person/models/person.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Member extends Person {
  @Column({ type: 'uuid', nullable: true })
  private team_id: string | null;
  get getTeamId(): string | null {
    return this.team_id;
  }

  @Column({ type: 'json' })
  private stats: Stats;
  get getStats(): Stats {
    return this.stats;
  }
}

export interface Stats {
  shots_on_goal: number;
}
