import { CreateTeamDto } from '../dtos/create-team.dto';
import { Team } from '../models/team.entity';

export class TeamMapper {
  public static toDto(raw: Team): CreateTeamDto {
    const teamDto = new CreateTeamDto();
    teamDto.name = raw.getName;
    teamDto.coach = raw.getCoach;
    teamDto.captain = raw.getCaptain;
    teamDto.status = raw.getStatus;

    return teamDto;
  }

  public static toDomain(createTeamDto: CreateTeamDto): Team {
    const team = new Team(
      createTeamDto.name,
      createTeamDto.coach,
      createTeamDto.status,
      createTeamDto.captain,
    );
    return team;
  }
}
