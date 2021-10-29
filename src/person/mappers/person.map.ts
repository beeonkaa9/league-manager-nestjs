import { CreatePersonDto } from '../dto/create-person.dto';
import { Person } from '../models/person.entity';

export class PersonMapper {
  public static toDto(raw: Person): CreatePersonDto {
    const personDto = new CreatePersonDto();
    personDto.name = raw.getName;
    personDto.last_name = raw.getLastName;
    personDto.phone = raw.getPhone;
    personDto.email = raw.getEmail;
    personDto.dob = raw.getDob;
    personDto.role = raw.getRole;
    personDto.status = raw.getStatus;

    return personDto;
  }

  public static toDomain(createPersonDto: CreatePersonDto): Person {
    const person = new Person(
      createPersonDto.name,
      createPersonDto.last_name,
      createPersonDto.phone,
      createPersonDto.email,
      createPersonDto.dob,
      createPersonDto.role,
      createPersonDto.status,
    );
    return person;
  }
}
