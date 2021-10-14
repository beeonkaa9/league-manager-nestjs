import { CreateMatchDto } from '../dtos/create-match.dto';
import { Match } from '../models/match.entity';

//converts from entity to dto
export class MatchMapper {
  public static toDto(raw: Match): CreateMatchDto {
    const matchDto = new CreateMatchDto();
    matchDto.home = raw.getHome;
    matchDto.away = raw.getAway;
    matchDto.home_score = raw.getHomeScore;
    matchDto.away_score = raw.getAwayScore;
    matchDto.played = raw.getPlayed;
    matchDto.location = raw.getLocation;

    return matchDto;
  }

  //converts from dto to entity
  public static toDomain(createMatchDto: CreateMatchDto): Match {
    const match = new Match(
      createMatchDto.home,
      createMatchDto.away,
      createMatchDto.home_score,
      createMatchDto.away_score,
      createMatchDto.played,
      createMatchDto.location,
    );
    return match;
  }
}
