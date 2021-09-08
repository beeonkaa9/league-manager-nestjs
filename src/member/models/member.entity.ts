import { Person } from '../../person/models/person.entity';
import { ChildEntity, Column } from 'typeorm';
import { Status, Role } from '../../person/models/person.entity';

export interface Stats {
  shots_on_goal: number;
}

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
