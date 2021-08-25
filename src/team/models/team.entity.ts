import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryColumn()
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
  private coach: string;
  get getCoach(): string {
    return this.coach;
  }

  @Column()
  private captain: string | null;
  get getCaptain(): string | null {
    return this.captain;
  }

  @Column()
  private status: Status;
  get getStatus(): Status {
    return this.status;
  }
}

enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
