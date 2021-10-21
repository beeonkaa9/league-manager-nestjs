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
  /**
   * filters person by id
   * @param {string} id
   * @returns {Promise:<Person>}
   */
  public async findPersonById(id: string): Promise<Person> {
    //return only data from person entity (no team_id or stats)
    return await this.query(
      `SELECT id, name, last_name, phone, email, dob, role, status, age FROM PERSON where id = $1`,
      [id],
    );
  }
}
