import { Controller, Get, Param } from '@nestjs/common';

@Controller('person')
export class PersonController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'returns a person';
  }
}
