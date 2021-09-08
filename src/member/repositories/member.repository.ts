import { Repository } from 'typeorm';
import { Member } from '../models/member.entity';

export interface IMemberRepository {
  createMember(member: Member): Promise<Member>;
  findMemberById(id: string): Promise<Member>;
  findFreeAgents(): Promise<Member>;
  updateMemberById(id: string): Promise<Member>;
  updateMemberStatus(id: string): Promise<Member>;
  deleteMember(id: string): Promise<Member>;
}

export class MemberRepository
  extends Repository<Member>
  implements IMemberRepository
{
  public async createMember(member: Member): Promise<Member> {}
  public async findMemberById(id: string): Promise<Member> {}
  public async findFreeAgents(): Promise<Member> {}
  public async updateMemberById(id: string): Promise<Member> {}
  public async updateMemberStatus(id: string): Promise<Member> {}
  public async deleteMember(id: string): Promise<Member> {}
}
