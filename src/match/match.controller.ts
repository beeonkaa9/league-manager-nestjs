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
import { MatchService } from './match.service';
import { Match } from './models/match.entity';

@Controller('match')
export class MatchController {
  constructor(private matchService: MatchService) {}
  /*
    POST /match
    Create a match
  */
  @Post()
  async createMatch(
    @Body() createMatchDto: CreateMatchDto,
  ): Promise<Match | Error> {
    return await this.matchService.createMatch(createMatchDto);
  }

  /*
    GET /match/{id}
    Find a match by id
  */
  @Get(':id')
  async findMatchById(@Param('id') id: string): Promise<Match | Error> {
    return await this.matchService.findMatchById(id);
  }

  /*
    PATCH /{id}
    Updates a match
  
  @Patch(':id')
  async updateMatch(@Param('id') id: string, @Body() body: string) {
    return 'updates a match';
  }

  /*
    Delete /match/{id}
    Deletes a match
  
  @Delete(':id')
  async deleteMatch(@Param('id') id: string) {
    return 'deletes a match';
  }
  */
}
