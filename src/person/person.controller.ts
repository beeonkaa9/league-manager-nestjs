import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Person } from './models/person.entity';
import { PersonService } from './person.service';
import { LeagueError } from '../core/errors/league-error';

@ApiTags('person')
@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  /**
   * GET /person/{id}
   * filters person by id
   * @param {string} id
   * @returns {Promise:<Person | LeagueError>}
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Person | LeagueError> {
    return await this.personService.findPersonById(id);
  }
}
