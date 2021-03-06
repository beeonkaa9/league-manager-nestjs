import { Member } from '../../member/models/member.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Match } from '../../match/models/match.entity';

export enum teamStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  private id: string;
  get getId(): string {
    return this.id;
  }

  @Column({ type: 'character varying', nullable: false, unique: true })
  private name: string;
  get getName(): string {
    return this.name;
  }

  @Column({ type: 'uuid', nullable: false })
  private coach: string;
  get getCoach(): string {
    return this.coach;
  }

  @Column({ type: 'uuid', nullable: true })
  private captain: string | null;
  get getCaptain(): string | null {
    return this.captain;
  }

  @Column({
    type: 'enum',
    enum: ['Active', 'Inactive'],
    enumName: 'teamEnum',
    nullable: false,
  })
  private status: teamStatus;
  get getStatus(): teamStatus {
    return this.status;
  }

  @OneToMany(() => Member, (member) => member.team)
  members: Member[];

  @OneToMany(() => Match, (match) => match.team)
  matches: Match[];

  constructor(
    name: string,
    coach: string,
    status: teamStatus,
    captain?: string,
  ) {
    this.name = name;
    this.coach = coach;
    this.captain = captain;
    this.status = status;
  }
}
