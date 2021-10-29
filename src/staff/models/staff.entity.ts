import { ChildEntity, Column } from 'typeorm';
import { Person } from '../../person/models/person.entity';
import { Status, Role } from '../../person/models/person.entity';

@ChildEntity()
export class Staff extends Person {
  @Column({ type: 'int', nullable: false })
  private wage: number;
  get getWage(): number {
    return this.wage;
  }

  @Column({ type: 'date', nullable: false })
  private hire_date: string;
  get getHireDate(): string {
    return this.hire_date;
  }

  constructor(
    name: string,
    last_name: string,
    phone: number,
    email: string,
    dob: string,
    role: Role,
    status: Status,
    wage: number,
    hire_date: string,
  ) {
    super(name, last_name, phone, email, dob, role, status);
    this.wage = wage;
    this.hire_date = hire_date;
  }
}
