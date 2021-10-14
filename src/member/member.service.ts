import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from './dtos/create-member.dto';
import { UpdateMemberStatusDto } from './dtos/update-member-status.dto';
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

  /**
   * Create a member of a team along with an entry in the person table
   * @param {CreateMemberDto} createMemberDto
   * @returns {Member<Member | Error>}
   */
  async createMember(
    createMemberDto: CreateMemberDto,
  ): Promise<Member | Error> {
    try {
      const member = MemberMapper.toDomain(createMemberDto);

      return await this.memberRepository.createMember(member);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /**
   * return all players without a team
   * @returns {Promise<Member[] | Error>}
   */
  async findFreeAgents(): Promise<Member[] | Error> {
    try {
      return await this.memberRepository.findFreeAgents();
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /**
   * filter by id
   * @param {string} id
   * @returns {Promise<Member>}
   */
  async findMemberById(id: string): Promise<Member> {
    return await this.memberRepository.findMemberById(id);
  }

  /**
   * updates member and saves changes to database
   * @param {string} id
   * @param {UpdateMemberDto} updateMemberDto
   * @returns {Promise<Member | Error>}
   */
  async updateMemberById(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member | Error> {
    const member: Member = await this.memberRepository.findMemberById(id);

    try {
      return await this.memberRepository.updateMemberById(
        member,
        updateMemberDto,
      );
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /**
   * update a member's status
   * @param {string} id
   * @param {updateMemberStatusDto} updateMemberStatusDto
   * @returns {Promise<Member | Error>}
   */
  async updateMemberStatus(
    id: string,
    updateMemberStatusDto: UpdateMemberStatusDto,
  ): Promise<Member | Error> {
    try {
      const member: Member = await this.memberRepository.findMemberById(id);
      return await this.memberRepository.updateMemberStatus(
        member,
        updateMemberStatusDto,
      );
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /**
   * deletes a member
   * @param {string} id
   * @returns {Promise<Member | Error>}
   */
  async deleteMember(id: string): Promise<Member | Error> {
    try {
      const member = await this.memberRepository.findMemberById(id);
      return await this.memberRepository.deleteMember(member);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
