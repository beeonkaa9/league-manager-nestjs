import { ApiProperty } from '@nestjs/swagger';
import { teamStatus } from '../models/team.entity';

export class UpdateTeamStatusDto {
  @ApiProperty()
  status: teamStatus;
}
