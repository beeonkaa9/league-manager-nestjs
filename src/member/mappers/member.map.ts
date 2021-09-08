import { CreateMemberDto } from '../dtos/create-member.dto';
import { Member } from '../models/member.entity';

export class MemberMapper {
  public static toDto(raw: Member): CreateMemberDto {
    const memberDto = new CreateMemberDto();
    memberDto.id = raw.getId;
    memberDto.name = raw.getName;
    memberDto.last_name = raw.getLastName;
    memberDto.phone = raw.getPhone;
    memberDto.email = raw.getEmail;
    memberDto.dob = raw.getDob;
    memberDto.role = raw.getRole;
    memberDto.status = raw.getStatus;
    memberDto.age = raw.getAge;
    memberDto.team_id = raw.getTeamId;
    memberDto.stats = raw.getStats;

    return memberDto;
  }

  public static toDomain(createMemberDto: CreateMemberDto): Member {
    const member = new Member(
      createMemberDto.id,
      createMemberDto.name,
      createMemberDto.last_name,
      createMemberDto.phone,
      createMemberDto.email,
      createMemberDto.dob,
      createMemberDto.role,
      createMemberDto.status,
      createMemberDto.age,
      createMemberDto.stats,
      createMemberDto.team_id,
    );
    return member;
  }
}
