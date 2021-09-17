import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resolve } from 'path/posix';
import { Person } from 'src/person/models/person.entity';
import { CreateMemberDto } from './dtos/create-member.dto';
import { UpdateMemberDto } from './dtos/update-member.dto';
import { MemberMapper } from './mappers/member.map';
import { Member } from './models/member.entity';
import { MemberRepository } from './repositories/member.repository';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberRepository)
    private memberRepository: MemberRepository,
  ) {}

  /*
    service function for POST /member:
    Create a member of a team along with an entry in the person table
  */
  async createMember(
    createMemberDto: CreateMemberDto,
  ): Promise<Member | Error> {
    try {
      const member = MemberMapper.toDomain(createMemberDto);

      return await this.memberRepository.createMember(member);
    } catch (e) {
      console.log(e);
      return new Error('something went wrong; user could not be created');
    }
  }

  /*
  GET /member/free-agent
  return all players without a team
  */
  async findFreeAgents(): Promise<Member[] | Error> {
    try {
      return await this.memberRepository.findFreeAgents();
    } catch (e) {
      console.log(e);
      return new Error('an error occured while searching for all free agents');
    }
  }

  /*
  GET /member/{id}:
  this should return member data and person data
  */
  async findMemberById(id: string): Promise<Member | Error> {
    try {
      return await this.memberRepository.findMemberById(id);
    } catch (e) {
      console.log(e);
      return new Error('an error occurred while searching for a member');
    }
  }

  /*
  PATCH /member/{id}
  update a member via id
  */
  async updateMemberById(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member | Error> {
    const member: Member = await this.memberRepository.findMemberById(id);
    if (updateMemberDto.id != id && updateMemberDto.id != null) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'changing the id is not allowed',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    try {
      return await this.memberRepository.updateMemberById(
        member,
        updateMemberDto,
      );
    } catch (e) {
      console.log(e);
      return new Error('an error occurred while updating the member');
    }
  }

  /*
  PATCH /member/{id}/status
  update a member's status
  
  async updateMemberStatus(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    return await this.memberRepository.updateMemberById(id, updateMemberDto);
  }

  /*
  DELETE /member/{id}
  delete a member
  */
  async deleteMember(id: string): Promise<Member | Error> {
    try {
      const member = await this.memberRepository.findMemberById(id);
      return await this.memberRepository.deleteMember(member);
    } catch (e) {
      console.log(e);
      return new Error('user was not able to be deleted');
    }
  }
}
