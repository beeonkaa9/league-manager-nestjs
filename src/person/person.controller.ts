import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Person } from './models/person.entity';
import { PersonService } from './person.service';

@ApiTags('person')
@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  /**
   * GET /person/{id}
   * filters person by id
   * @param {string} id
   * @returns {Promise:<Person>}
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Person> {
    return await this.personService.findPersonById(id);
  }
}
