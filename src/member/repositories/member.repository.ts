import { Injectable } from '@nestjs/common';
import { Person } from 'src/person/models/person.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateMemberDto } from '../dtos/update-member.dto';
import { Member } from '../models/member.entity';

export interface IMemberRepository {
  createMember(member: Member): Promise<Member>;
  findMemberById(id: string): Promise<Member>;
  /*findFreeAgents(): Promise<Person[]>;
  updateMemberById(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member>;
  updateMemberStatus(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member>;
  */
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

  public async findMemberById(memberId: string): Promise<Member> {
    return await this.findOne(memberId);
  }

  /*
  public async findFreeAgents(): Promise<Person[]> {
    //if team_id = null, return members

    const freeAgentQuery = await this.createQueryBuilder('member')
      .select('person')
      .from(Person, 'person')
      .where('person.id = :member')
      .andWhere('member.team_id is null')
      .getMany();

    return freeAgentQuery;
  }
  

  public async updateMemberById(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    let member: Member = await this.findMemberById(id);

    return await this.save(member);
  }

  
  public async updateMemberStatus(
    id: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    //access status to change it; query?
  }
  */

  public async deleteMember(member: Member): Promise<Member> {
    return await this.remove(member);
  }
}
