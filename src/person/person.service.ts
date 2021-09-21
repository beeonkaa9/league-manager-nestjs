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
  /*
  GET /person/{id}:
  this returns only person data (no members)
  */
  async findPersonById(id: string): Promise<Person> {
    //find a person that is also not a member

    return await this.personRepository.findPersonById(id);
  }
}
