import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

export enum Role {
  Manager = 'MANAGER',
  Coach = 'COACH',
  Referee = 'REFEREE',
  Linesman = 'LINESMAN',
  MedicalStaff = 'MEDICALSTAFF',
  Captain = 'CAPTAIN',
  ScoreKeeper = 'SCOREKEEPER',
  Goalkeeper = 'GOALKEEPER',
  RightFullback = 'RIGHTFULLBACK',
  LeftFullback = 'LEFTFULLBACK',
  CenterBack = 'CENTERBACK',
  Sweeper = 'SWEEPER',
  DefendingMidfielder = 'DEFENDINGMIDFIELDER',
  RightMidfielder = 'RIGHTMIDFIELDER',
  CentralMidfielder = 'CENTRALMIDFIELDER',
  Striker = 'STRIKER',
  AttackingMidfielder = 'ATTACKINGMIDFIELDER',
  LeftMidfielder = 'LEFTMIDFIELDER',
}

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED',
}

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Person {
  @PrimaryGeneratedColumn('uuid')
  private id: string;
  get getId(): string {
    return this.id;
  }

  @Column({ type: 'character varying', nullable: false })
  private name: string;
  get getName(): string {
    return this.name;
  }

  @Column({ type: 'character varying', nullable: false })
  private last_name: string;
  get getLastName(): string {
    return this.last_name;
  }

  @Column({ type: 'character varying', nullable: true, unique: true })
  private phone: number;
  get getPhone(): number {
    return this.phone;
  }

  @Column({ type: 'character varying', nullable: true, unique: true })
  private email: string;
  get getEmail(): string {
    return this.email;
  }

  @Column({ type: 'date', nullable: false })
  private dob: string;
  get getDob(): string {
    return this.dob;
  }

  @Column({
    type: 'enum',
    enum: [
      'Manager',
      'Coach',
      'Referee',
      'Linesman',
      'MedicalStaff',
      'Captain',
      'ScoreKeeper',
      'Goalkeeper',
      'RightFullback',
      'LeftFullback',
      'CenterBack',
      'Sweeper',
      'DefendingMidfielder',
      'RightMidfielder',
      'CentralMidfielder',
      'Striker',
      'AttackingMidfielder',
      'LeftMidfielder',
    ],
    enumName: 'roleEnum',
    nullable: false,
  })
  private role: Role;
  get getRole(): Role {
    return this.role;
  }

  @Column({
    type: 'enum',
    enum: ['Active', 'Inactive', 'Suspended'],
    enumName: 'statusEnum',
    nullable: true,
  })
  private status: Status;
  get getStatus(): Status {
    return this.status;
  }

  constructor(
    name: string,
    last_name: string,
    phone: number,
    email: string,
    dob: string,
    role: Role,
    status: Status,
  ) {
    this.name = name;
    this.last_name = last_name;
    this.phone = phone;
    this.email = email;
    this.dob = dob;
    this.role = role;
    this.status = status;
  }
}
