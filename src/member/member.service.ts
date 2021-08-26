import { Injectable, NotFoundException } from '@nestjs/common';
import { Member } from './models/member.entity';

@Injectable()
export class MemberService {
  private readonly members: Member[] = [];

  /*
    service function for POST /member:
    Create a member of a team along with an entry in the person table
  */
  create(member: Member) {
    this.members.push(member);
  }

  /*
  service for POST /member/{id}/payment: 
  player made a payment towards the membership
  */
  createPay(id: string, payment: number) {
    //get balance from id, then add the payment to it
  }

  /*
  GET /member/{id}:
  this should return member data and person data
  */
  //TODO: check if id exists in person as well
  findOne(memberId: string) {
    /*if (!this.members.find((members) => members.team_id == memberId)) {
      throw new NotFoundException('this user does not exist');
    }
    return this.members.find((members) => members.team_id == memberId);
    */
  }

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
  updateById(id: string, body: string) {
    //findOne, then update the body
  }

  /*
  PATCH /member/{id}/status
  update a member's status
  */
  updateStatus(id: string, body: string) {
    //update status
  }

  /*
  DELETE /member/{id}
  delete a member
  */
  delete(id: string) {
    //delete from member and from person tables
  }
}
