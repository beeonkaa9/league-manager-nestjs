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
import { ApiQuery } from '@nestjs/swagger';
import { Member } from 'src/member/models/member.entity';
import { Role, Status } from 'src/person/models/person.entity';
import { CreateTeamDto } from './dtos/create-team.dto';
import { UpdateTeamStatusDto } from './dtos/update-team-status.dto';
import { UpdateTeamDto } from './dtos/update-team.dto';
import { Team } from './models/team.entity';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}
  /*
    POST /team:
    Create a team
  */
  @Post()
  async createTeam(
    @Body() createTeamDto: CreateTeamDto,
  ): Promise<Team | Error> {
    return await this.teamService.createTeam(createTeamDto);
  }

  /*
    GET /team/{id}
    returns a team
  */
  @Get(':id')
  async findTeamById(@Param('id') id: string): Promise<Team | Error> {
    return await this.teamService.findTeamById(id);
  }

  /*
    GET /team/{id}/matches
    returns all matches a team has participated in
  
  @Get(':id/matches')
  async findTeamMatches(@Param('id') id: string) {
    return 'finds the matches a team has played in';
  }

  /*
    GET /team/{id}/member
    returns the members in a team (array of members)
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

  /*
    GET /team/{id}/stats
    returns the stats in the following JSON format:
    type response = { 
      "win": number;
      "loss": number;
      "players": number;
      "matches": number;
    }

  @Get(':id/stats')
  async findTeamStats() {
    return 'this returns stats for a team';
  }

  /*
    PATCH /team/{id}
    updates a team
  */
  @Patch(':id')
  async updateTeamById(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team | Error> {
    return await this.teamService.updateTeamById(id, updateTeamDto);
  }

  /*
    PATCH /team/status
    updates a team's status
  */
  @Patch(':id/status')
  async updateTeamStatus(
    @Param('id') id: string,
    @Body() updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team | Error> {
    return this.teamService.updateTeamStatus(id, updateTeamStatusDto);
  }

  /*
    Delete /team/{id}
    deletes a team
  
  @Delete(':id')
  async removeTeam(@Param('id') id: string) {
    return 'deletes a team';
  }
  */
}
