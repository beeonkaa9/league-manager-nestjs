import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}

export enum teamStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
