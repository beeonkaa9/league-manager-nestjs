import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Query } from 'typeorm/driver/Query';
import { UpdateMemberStatusDto } from '../dtos/update-member-status.dto';
import { UpdateMemberDto } from '../dtos/update-member.dto';
import { Member } from '../models/member.entity';

export interface IMemberRepository {
  createMember(member: Member): Promise<Member>;
  findMemberById(id: string): Promise<Member>;
  findFreeAgents(query: Query): Promise<Member[]>;
  updateMemberById(
    member: Member,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member>;
  /*
  updateMemberStatus(
    id: string,
    updateMemberStatusDto: UpdateMemberStatusDto,
  ): Promise<Member>;
  deleteMember(member: Member): Promise<Member>;
  */
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

  public async updateMemberById(
    member: Member,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    return await this.save({ ...member, ...updateMemberDto });
  }

  // public async updateMemberStatus(
  //   id: string,
  //   updateMemberStatusDto: UpdateMemberStatusDto,
  // ): Promise<Member> {
  //   access status to change it; query?
  //   return await this.save({})
  // }

  public async deleteMember(member: Member): Promise<Member> {
    return await this.remove(member);
  }
}
