import { Member } from '../../member/models/member.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Match } from 'src/match/models/match.entity';

export enum teamStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
@Entity()
export class Team {
  @PrimaryColumn({ type: 'text' })
  private id: string;
  get getId(): string {
    return this.id;
  }

  @Column({ type: 'character varying', nullable: false, unique: true })
  private name: string;
  get getName(): string {
    return this.name;
  }

  @Column({ type: 'text', nullable: false })
  private coach: string;
  get getCoach(): string {
    return this.coach;
  }

  @Column({ type: 'text', nullable: true })
  private captain: string | null;
  get getCaptain(): string | null {
    return this.captain;
  }

  @Column({
    type: 'enum',
    enum: ['active', 'inactive'],
    enumName: 'teamEnum',
    nullable: false,
  })
  private status: teamStatus;
  get getStatus(): teamStatus {
    return this.status;
  }

  @OneToMany(() => Member, (member) => member.team)
  members: Member[];

  @ManyToMany(() => Match, (match) => match.teams)
  matches: Match[];

  constructor(
    id: string,
    name: string,
    coach: string,
    status: teamStatus,
    captain?: string,
  ) {
    this.id = id;
    this.name = name;
    this.coach = coach;
    this.captain = captain;
    this.status = status;
  }
}
