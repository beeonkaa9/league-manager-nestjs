import { Person } from '../../person/models/person.entity';
import { ChildEntity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Status, Role } from '../../person/models/person.entity';
import { Team } from '../../team/models/team.entity';

export interface Stats {
  shots_on_goal: number;
}

@ChildEntity()
export class Member extends Person {
  @Column({ name: 'team_id', type: 'text', nullable: true })
  private team_id: string | null;
  get getTeamId(): string | null {
    return this.team_id;
  }

  @Column({ type: 'json' })
  private stats: Stats;
  get getStats(): Stats {
    return this.stats;
  }

  @ManyToOne(() => Team, (team) => team.members)
  @JoinColumn({ name: 'team_id', referencedColumnName: 'id' })
  team: Team;

  constructor(
    id: string,
    name: string,
    last_name: string,
    phone: number,
    email: string,
    dob: string,
    role: Role,
    status: Status,
    age: number,
    stats: Stats,
    team_id?: string,
  ) {
    super(id, name, last_name, phone, email, dob, role, status, age);
    this.team_id = team_id;
    this.stats = stats;
  }
}
