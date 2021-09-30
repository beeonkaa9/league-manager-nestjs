import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../../person/models/person.entity';

export class UpdateMemberStatusDto {
  @ApiProperty()
  status: Status;
}
