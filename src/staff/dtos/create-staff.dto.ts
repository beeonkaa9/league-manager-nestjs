import { ApiProperty } from '@nestjs/swagger';
import { CreatePersonDto } from '../../person/dto/create-person.dto';

export class CreateStaffDto extends CreatePersonDto {
  @ApiProperty({ type: 'int', example: '12' })
  wage: number;

  @ApiProperty({ type: 'date', example: '10/10/2021' })
  hire_date: string;
}
