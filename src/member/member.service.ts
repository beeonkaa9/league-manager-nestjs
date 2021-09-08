import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dtos/create-member.dto';

@Injectable()
export class MemberService {
  //private readonly members: Member[] = [];

  /*
    service function for POST /member:
    Create a member of a team along with an entry in the person table
  */
  createMember(createMemberDto: CreateMemberDto) {}

  /*
  GET /member/{id}:
  this should return member data and person data
  */
  findMemberById(id: string) {}

  /*
  GET /member/free-agent
  return all players without a team
  */
  findFreeAgents() {
    //return free agent
  }

  /*
  PATCH /member/{id}
  update a member via id
  */
  updateMemberById(id: string, body: string) {
    //findOne, then update the body
  }

  /*
  PATCH /member/{id}/status
  update a member's status
  */
  updateMemberStatus(id: string, body: string) {
    //update status
  }

  /*
  DELETE /member/{id}
  delete a member
  */
  deleteMember(id: string) {
    //delete from member and from person tables
  }
}
