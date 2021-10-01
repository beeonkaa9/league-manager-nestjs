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

  /**
   * POST /match
   * Create a match
   * @param {CreateMatchDto} createMatchDto
   * @returns {Promise<Match | Error>}
   */
  @Post()
  async createMatch(
    @Body() createMatchDto: CreateMatchDto,
  ): Promise<Match | Error> {
    return await this.matchService.createMatch(createMatchDto);
  }

  /**
   * GET /match/{id}
   * Find a match by id
   * @param {string} id
   * @returns {Promise<Match>}
   */
  @Get(':id')
  async findMatchById(@Param('id') id: string): Promise<Match> {
    return await this.matchService.findMatchById(id);
  }

  /**
   * PATCH /match/{id}
   * Updates a match
   * @param {string} id
   * @param {UpdateMatchDto} updateMatchDto
   * @returns {Promise<Match | Error>}
   */
  @Patch(':id')
  async updateMatch(
    @Param('id') id: string,
    @Body() updateMatchDto: UpdateMatchDto,
  ): Promise<Match | Error> {
    return await this.matchService.updateMatch(id, updateMatchDto);
  }

  /**
   * Delete /match/{id}
   * Deletes a match
   * @param {string} id
   * @returns {Promise <Match | Error>}
   */
  @Delete(':id')
  async deleteMatch(@Param('id') id: string): Promise<Match | Error> {
    return await this.matchService.deleteMatch(id);
  }
}
