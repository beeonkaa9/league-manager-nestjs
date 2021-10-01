import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Match } from 'src/match/models/match.entity';
import { Member } from '../member/models/member.entity';
import { Role, Status } from '../person/models/person.entity';
import { CreateTeamDto } from './dtos/create-team.dto';
import { TeamStatsDto } from './dtos/team-stats.dto';
import { UpdateTeamStatusDto } from './dtos/update-team-status.dto';
import { UpdateTeamDto } from './dtos/update-team.dto';
import { Team } from './models/team.entity';
import { TeamService } from './team.service';

@ApiTags('team')
@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  /**
   * POST /team:
   * creates a team
   * @param {CreateTeamDto} createTeamDto
   * @returns {Promise<Team | Error>}
   */
  @Post()
  async createTeam(
    @Body() createTeamDto: CreateTeamDto,
  ): Promise<Team | Error> {
    return await this.teamService.createTeam(createTeamDto);
  }

  /**
   * GET /team/{id}
   * returns a team
   * @param {string} id
   * @returns {Promise<Team>}
   */
  @Get(':id')
  async findTeamById(@Param('id') id: string): Promise<Team> {
    return await this.teamService.findTeamById(id);
  }

  /**
   * GET /team/{id}/matches
   * returns all matches a team has participated in
   * @param {string} id
   * @returns {Promise<Team>}
   */
  @Get(':id/matches')
  async findTeamMatches(@Param('id') id: string): Promise<Match[] | Error> {
    return await this.teamService.findTeamMatches(id);
  }

  /**
   * GET /team/{id}/member
   * finds members with id (team_id from member), status, and role matching parameters
   * @param {string} id
   * @param {Status} status
   * @param {Role} role
   * @returns {Promise<Member[] |  Error>}
   */
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'role', required: false })
  @Get(':id/member')
  async findTeamMember(
    @Param('id') id: string,
    @Query('status') status?: Status,
    @Query('role') role?: Role,
  ): Promise<Member[] | Error> {
    return await this.teamService.findTeamMembers(id, status, role);
  }

  /**
   * GET /team/{id}/stats
   * calculates the wins, losses, players, and matches of a team
   * @param {string} id
   * @returns {Promise<TeamStatsDto | Error>}
   */
  @Get(':id/stats')
  async findTeamStats(@Param('id') id: string): Promise<TeamStatsDto | Error> {
    return await this.teamService.getTeamStats(id);
  }

  /**
   * PATCH /team/{id}
   * updates team; saves changes to database
   * @param {string} id
   * @param {UpdateTeamDto} updateTeamDto
   * @returns {Promise<Team | Error>}
   */
  @Patch(':id')
  async updateTeamById(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team | Error> {
    return await this.teamService.updateTeamById(id, updateTeamDto);
  }

  /**
   * PATCH /team/status
   * updates a team's status
   * @param {string} id
   * @param {UpdateTeamStatusDto} updateTeamStatusDto
   * @returns {Promise<Team | Error>}
   */
  @Patch(':id/status')
  async updateTeamStatus(
    @Param('id') id: string,
    @Body() updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team | Error> {
    return await this.teamService.updateTeamStatus(id, updateTeamStatusDto);
  }

  /**
   * DELETE /team/{id}
   * deletes a team from the database
   * @param {string} id
   * @returns {Promise<Team | Error>}
   */
  @Delete(':id')
  async removeTeam(@Param('id') id: string): Promise<Team | Error> {
    return await this.teamService.removeTeam(id);
  }
}
