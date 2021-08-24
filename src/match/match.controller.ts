import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMatchDto } from './dtos/create-match.dto';

@Controller('match')
export class MatchController {
  /*
    POST /match
    Create a match
  */
  @Post()
  createMatch(@Body() createMatchDto: CreateMatchDto) {
    return 'creates a new match';
  }

  /*
    GET /match/{id}
    Find a match by id
  */
  @Get(':id')
  findMatch(@Param('id') id: string) {
    return 'finds a match';
  }

  /*
    PATCH /{id}
    Updates a match
  */
  @Patch(':id')
  updateMatch(@Param('id') id: string, @Body() body: string) {
    return 'updates a match';
  }

  /*
    Delete /match/{id}
    Deletes a match
  */
  @Delete(':id')
  deleteMatch(@Param('id') id: string) {
    return 'deletes a match';
  }
}
