import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTeamDto } from './dtos/create-team.dto';
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
  async findTeamById(@Param('id') id: string) {
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
  
  @Get(':id/member')
  async findTeamMember(
    @Param('id') id: string,
    @Param('status') status?: string,
    @Param('role') role?: string,
  ) {
    return 'gets array of team members';
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
  
  @Patch(':id')
  async updateTeamId(@Param('id') id: string, @Body() body: string) {
    return 'posts an update for team';
  }

  /*
    PATCH /team/status
    updates a team's status
  
  @Patch(':id/status')
  async updateTeamStatus(@Param('id') id: string, @Body() body: string) {
    return 'posts a status update for team';
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
