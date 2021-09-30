import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Person } from '../models/person.entity';

export interface IPersonRepository {
  findPersonById(id: string): Promise<Person | NotFoundException>;
}

@Injectable()
@EntityRepository(Person)
export class PersonRepository
  extends Repository<Person>
  implements IPersonRepository
{
  public async findPersonById(id: string): Promise<Person> {
    try {
      await this.findOneOrFail(id);
      return await this.query(
        `SELECT id, name, last_name, phone, email, dob, role, status, age FROM PERSON where id = $1`,
        [id],
      );
    } catch {
      throw new NotFoundException('this id does not exist in the system');
    }
  }
}
