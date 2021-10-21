import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeagueError } from '../core/errors/league-error';
import {
  FindPersonByIdError,
  FindPersonQueryError,
  PersonIdNotFoundError,
} from './errors';
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
   * @returns {Promise:<Person | LeagueError>}
   */
  async findPersonById(id: string): Promise<Person | LeagueError> {
    try {
      const personId = await this.personRepository.findOne(id);
      if (!personId) {
        throw new PersonIdNotFoundError(id);
      }
      const person = await this.personRepository.findPersonById(id);
      if (!person) {
        throw new FindPersonQueryError(id);
      }
      return person;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new FindPersonByIdError(`${e.name}: ${e.message}`);
    }
  }
}
