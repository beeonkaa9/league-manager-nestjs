import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMemberDto } from './dtos/create-member.dto';

@Controller('member')
export class MemberController {
  /*
    POST /member:
    Create a member of a team along with an entry in the person table
  */
  @Post()
  createMember(@Body() createMemberDto: CreateMemberDto) {
    return 'creates a member';
  }

  /*
  GET /member/{id}:
  this should return member data and person data
  */
  @Get(':id')
  findMemberById(@Param('id') id: string) {
    return 'returns a member';
  }

  /*
  GET /member/free-agent
  return all players without a team
  */
  @Get('free-agent')
  findFreeAgents() {
    return 'returns all players without a team';
  }

  /*
  PATCH /member/{id}
  update a member via id
  */
  @Patch(':id')
  updateMemberById(@Param('id') id: string, @Body() body: string) {
    return 'this updates the id';
  }

  /*
  PATCH /member/{id}/status
  update a member's status
  */
  @Patch(':id/status')
  updateMemberStatus(@Param('id') id: string, @Body() body: string) {
    return 'this updates the member status';
  }

  /*
  DELETE /member/{id}
  delete a member
  */
  @Delete(':id')
  deleteMember(@Param('id') id: string) {
    return 'this deletes an id';
  }
}
