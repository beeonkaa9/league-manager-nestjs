import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../../person/models/person.entity';

export class UpdateMemberStatusDto {
  @ApiProperty({ type: 'json', example: '{shots-on-goal: 21}' })
  status: Status;
}
