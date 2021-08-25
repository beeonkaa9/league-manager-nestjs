import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Person {
  @PrimaryGeneratedColumn()
  private id: string;
  get getId(): string {
    return this.id;
  }

  @Column()
  private name: string;
  get getName(): string {
    return this.name;
  }

  @Column()
  private last_name: string;
  get getLastName(): string {
    return this.last_name;
  }

  @Column()
  private phone: number;
  get getPhone(): number {
    return this.phone;
  }

  @Column()
  private email: string;
  get getEmail(): string {
    return this.email;
  }

  @Column()
  private dob: string;
  get getDob(): string {
    return this.dob;
  }

  @Column()
  private role: Role;
  get getRole(): string {
    return this.role;
  }

  @Column()
  private status: Status;
  get getStatus(): Status {
    return this.status;
  }

  @Column()
  private age: number;
  get getAge(): number {
    return this.age;
  }
}

enum Role {
  Manager = 'MANAGER',
  Coach = 'COACH',
  Referee = 'REFEREE',
  Linesman = 'LINESMAN',
  MedicalStaff = 'MEDICALSTAFF',
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

enum Status {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
  suspended = 'SUSPENDED',
}
