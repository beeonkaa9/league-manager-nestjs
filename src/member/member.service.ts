import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeagueError } from '../core/errors/league-error';
import { CreateMemberDto } from './dtos/create-member.dto';
import { UpdateMemberStatusDto } from './dtos/update-member-status.dto';
import { UpdateMemberDto } from './dtos/update-member.dto';
import {
  DeleteMemberError,
  FindMemberError,
  FreeAgentsError,
  FreeAgentsNotFoundError,
  MemberDeleteFailedError,
  MemberDtoNotConvertedError,
  MemberIdNotFoundError,
  MemberNotSavedError,
  MemberStatusNotSavedError,
  UpdatedMemberNotSavedError,
  UpdateMemberByIdError,
  UpdateMemberStatusError,
} from './errors';
import { MemberCreateError } from './errors/member-create-error';
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
   * @returns {Member<Member | LeagueError>}
   */
  async createMember(
    createMemberDto: CreateMemberDto,
  ): Promise<Member | LeagueError> {
    try {
      const member = MemberMapper.toDomain(createMemberDto);
      if (!member) {
        throw new MemberDtoNotConvertedError();
      }
      const newMember = await this.memberRepository.createMember(member);
      if (!newMember) {
        throw new MemberNotSavedError();
      }
      return newMember;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new MemberCreateError(e.message);
    }
  }

  /**
   * return all players without a team
   * @returns {Promise<Member[] | LeagueError>}
   */
  async findFreeAgents(): Promise<Member[] | LeagueError> {
    try {
      const findFreeAgents = await this.memberRepository.findFreeAgents();
      if (!findFreeAgents.length) {
        throw new FreeAgentsNotFoundError();
      }
      return findFreeAgents;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new FreeAgentsError(e.message);
    }
  }

  /**
   * filter by id
   * @param {string} id
   * @returns {Promise<Member | LeagueError>}
   */
  async findMemberById(id: string): Promise<Member | LeagueError> {
    try {
      const findMember = await this.memberRepository.findMemberById(id);
      if (!findMember) {
        throw new MemberIdNotFoundError(id);
      }
      return findMember;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new FindMemberError(e.message);
    }
  }

  /**
   * updates member and saves changes to database
   * @param {string} id
   * @param {UpdateMemberDto} updateMemberDto
   * @returns {Promise<Member | LeagueError>}
   */
  async updateMemberById(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member | LeagueError> {
    try {
      const member: Member = await this.memberRepository.findMemberById(id);
      if (!member) {
        throw new MemberIdNotFoundError(id);
      }
      const updatedMember = await this.memberRepository.updateMemberById(
        member,
        updateMemberDto,
      );
      if (!updatedMember) {
        throw new UpdatedMemberNotSavedError();
      }
      return updatedMember;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new UpdateMemberByIdError(e.message);
    }
  }

  /**
   * update a member's status
   * @param {string} id
   * @param {updateMemberStatusDto} updateMemberStatusDto
   * @returns {Promise<Member | LeagueError>}
   */
  async updateMemberStatus(
    id: string,
    updateMemberStatusDto: UpdateMemberStatusDto,
  ): Promise<Member | LeagueError> {
    try {
      const member: Member = await this.memberRepository.findMemberById(id);
      if (!member) {
        throw new MemberIdNotFoundError(id);
      }
      const updatedMemberStatus =
        await this.memberRepository.updateMemberStatus(
          member,
          updateMemberStatusDto,
        );
      if (!updatedMemberStatus) {
        throw new MemberStatusNotSavedError();
      }
      return updatedMemberStatus;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new UpdateMemberStatusError(e.message);
    }
  }

  /**
   * deletes a member
   * @param {string} id
   * @returns {Promise<Member | LeagueError>}
   */
  async deleteMember(id: string): Promise<Member | LeagueError> {
    try {
      const member = await this.memberRepository.findMemberById(id);
      if (!member) {
        throw new MemberIdNotFoundError(id);
      }
      const deletedMember = await this.memberRepository.deleteMember(member);
      if (!deletedMember) {
        throw new MemberDeleteFailedError();
      }
      return deletedMember;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new DeleteMemberError(e.message);
    }
  }
}
