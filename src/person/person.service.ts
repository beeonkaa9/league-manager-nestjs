import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './models/person.entity';
import { PersonRepository } from './repositories/person.repository';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonRepository)
    private personRepository: PersonRepository,
  ) {}

  /**
   * filters person by id
   * @param {string} id
   * @returns {Promise:<Person>}
   */
  async findPersonById(id: string): Promise<Person> {
    return await this.personRepository.findPersonById(id);
  }
}
