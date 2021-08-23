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

@Controller('team')
export class TeamController {
  /*
    POST /team:
    Create a team
  */
  @Post()
  createTeam(@Body() createTeamDto: CreateTeamDto) {
    return 'this creates a new team';
  }

  /*
    GET /team/{id}
    returns a team
  */
  @Get(':id')
  findTeamById(@Param('id') id: string) {
    return 'finds a team by id';
  }

  /*
    GET /team/{id}/matches
    returns all matches a team has participated in
  */
  @Get(':id/matches')
  findTeamMatches(@Param('id') id: string) {
    return 'finds the matches a team has played in';
  }

  /*
    GET /team/{id}/member
    returns the members in a team (array of members)
  */
  @Get(':id/member')
  findTeamMember(
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
  */
  @Get(':id/stats')
  findTeamStats() {
    return 'this returns stats for a team';
  }

  /*
    PATCH /team/{id}
    updates a team
  */
  @Patch(':id')
  updateTeamId(@Param('id') id: string, @Body() body: string) {
    return 'posts an update for team';
  }

  /*
    PATCH /team/status
    updates a team's status
  */
  @Patch(':id/status')
  updateTeamStatus(@Param('id') id: string, @Body() body: string) {
    return 'posts a status update for team';
  }

  /*
    Delete /team/{id}
    deletes a team
  */
  @Delete(':id')
  removeTeam(@Param('id') id: string) {
    return 'deletes a team';
  }
}
