import { Member } from 'src/member/models/member.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

export enum teamStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
@Entity()
export class Team {
  @PrimaryColumn({ type: 'uuid' })
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
