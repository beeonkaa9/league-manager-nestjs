import { Injectable, NotFoundException } from '@nestjs/common';
import { Role, Status } from 'src/person/models/person.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Query } from 'typeorm/driver/Query';
import { UpdateMemberStatusDto } from '../dtos/update-member-status.dto';
import { UpdateMemberDto } from '../dtos/update-member.dto';
import { Member } from '../models/member.entity';

export interface IMemberRepository {
  createMember(member: Member): Promise<Member>;
  findMemberById(id: string): Promise<Member>;
  findFreeAgents(query: Query): Promise<Member[]>;
  getTeamMembers(id: string, status?: Status, role?: Role): Promise<Member[]>;
  getMemberCount(id: string): Promise<number>;
  updateMemberById(
    member: Member,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member>;
  updateMemberStatus(
    member: Member,
    updateMemberStatusDto: UpdateMemberStatusDto,
  ): Promise<Member>;
  deleteMember(member: Member): Promise<Member>;
}

@Injectable()
@EntityRepository(Member)
export class MemberRepository
  extends Repository<Member>
  implements IMemberRepository
{
  public async createMember(member: Member): Promise<Member> {
    return await this.save(member);
  }

  public async findMemberById(id: string): Promise<Member> {
    try {
      return await this.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException('this id does not exist in the table');
    }
  }

  public async findFreeAgents(): Promise<Member[]> {
    //if team_id = null, return members
    return await this.createQueryBuilder()
      .select('member')
      .from(Member, 'member')
      .where('member.team_id is null')
      .getMany();
  }

  public async getTeamMembers(
    id: string,
    status?: Status,
    role?: Role,
  ): Promise<Member[]> {
    let query: any = this.createQueryBuilder()
      .select('member')
      .from(Member, 'member')
      .where('member.team_id = :teamid', { teamid: id });

    if (status != null) {
      query = query.andWhere('member.status = :status', { status: status });
    }
    if (status == null && role != null) {
      query = query.andWhere('member.role = :role', { role: role });
    }
    if (status != null && role != null) {
      query = query.andWhere('member.status = :status', { status: status });
      query = query.andWhere('member.role = :role', { role: role });
    }

    return await query.getMany();
  }

  public async getMemberCount(id: string): Promise<number> {
    return await this.createQueryBuilder('person')
      .select('person.id')
      .where('person.team_id = :id', { id: id })
      .getCount();
  }

  public async updateMemberById(
    member: Member,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    return await this.save({ ...member, ...updateMemberDto });
  }

  public async updateMemberStatus(
    member: Member,
    updateMemberStatusDto: UpdateMemberStatusDto,
  ): Promise<Member> {
    return await this.save({ ...member, ...updateMemberStatusDto });
  }

  public async deleteMember(member: Member): Promise<Member> {
    return await this.remove(member);
  }
}
