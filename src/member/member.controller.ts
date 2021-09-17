import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Person } from 'src/person/models/person.entity';
import { CreateMemberDto } from './dtos/create-member.dto';
import { UpdateMemberDto } from './dtos/update-member.dto';
import { MemberService } from './member.service';
import { Member } from './models/member.entity';

@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService) {}
  /*
    POST /member:
    Create a member of a team along with an entry in the person table
  */
  @Post()
  async createMember(
    @Body() createMemberDto: CreateMemberDto,
  ): Promise<Member | Error> {
    return await this.memberService.createMember(createMemberDto);
  }

  /*
  GET /member/free-agent
  return all players without a team
  */
  @Get('/free-agent')
  async findFreeAgents(): Promise<Member[] | Error> {
    return await this.memberService.findFreeAgents();
  }
  /*
  GET /member/{id}:
  this should return member data and person data
  */
  @Get(':id')
  async findMemberById(@Param('id') id: string): Promise<Member | Error> {
    return await this.memberService.findMemberById(id);
  }

  /*
  PATCH /member/{id}
  update a member via id
  */
  @Patch(':id')
  async updateMemberById(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ): Promise<Member | Error> {
    return await this.memberService.updateMemberById(id, updateMemberDto);
  }

  /*
  PATCH /member/{id}/status
  update a member's status
  
  @Patch(':id/status')
  async updateMemberStatus(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    return await this.memberService.updateMemberStatus(id, updateMemberDto);
  }

  /*
  DELETE /member/{id}
  delete a member
  */
  @Delete(':id')
  async deleteMember(@Param('id') id: string): Promise<Member | Error> {
    return await this.memberService.deleteMember(id);
  }
}
