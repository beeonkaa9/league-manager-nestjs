import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMatchDto } from './dtos/create-match.dto';
import { UpdateMatchDto } from './dtos/update-match.dto';
import { MatchService } from './match.service';
import { Match } from './models/match.entity';

@ApiTags('match')
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
  */
  @Patch(':id')
  async updateMatch(
    @Param('id') id: string,
    @Body() updateMatchDto: UpdateMatchDto,
  ): Promise<Match | Error> {
    return await this.matchService.updateMatch(id, updateMatchDto);
  }

  /*
    Delete /match/{id}
    Deletes a match
  */
  @Delete(':id')
  async deleteMatch(@Param('id') id: string): Promise<Match | Error> {
    return await this.matchService.deleteMatch(id);
  }
}
