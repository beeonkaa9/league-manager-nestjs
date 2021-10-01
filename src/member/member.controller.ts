import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMemberDto } from './dtos/create-member.dto';
import { UpdateMemberStatusDto } from './dtos/update-member-status.dto';
import { UpdateMemberDto } from './dtos/update-member.dto';
import { MemberService } from './member.service';
import { Member } from './models/member.entity';

@ApiTags('member')
@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService) {}

  /**
   * POST /member:
   * Create a member of a team along with an entry in the person table
   * @param {CreateMemberDto} createMemberDto
   * @returns {Member<Member | Error>}
   */
  @Post()
  async createMember(
    @Body() createMemberDto: CreateMemberDto,
  ): Promise<Member | Error> {
    return await this.memberService.createMember(createMemberDto);
  }

  /**
   * GET /member/free-agent
   * return all players without a team
   * @returns {Promise<Member[] | Error>}
   */
  @Get('/free-agent')
  async findFreeAgents(): Promise<Member[] | Error> {
    return await this.memberService.findFreeAgents();
  }

  /**
   * GET /member/{id}:
   * filter by id ; returns member and person data
   * @param {string} id
   * @returns {Promise<Member>}
   */
  @Get(':id')
  async findMemberById(@Param('id') id: string): Promise<Member> {
    return await this.memberService.findMemberById(id);
  }

  /**
   * PATCH /member/{id}
   * updates member and saves changes to database
   * @param {string} id
   * @param {UpdateMemberDto} updateMemberDto
   * @returns {Promise<Member | Error>}
   */
  @Patch(':id')
  async updateMemberById(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ): Promise<Member | Error> {
    return await this.memberService.updateMemberById(id, updateMemberDto);
  }

  /**
   * PATCH /member/{id}/status
   * update a member's status
   * @param {string} id
   * @param {updateMemberStatusDto} updateMemberStatusDto
   * @returns {Promise<Member | Error>}
   */
  @Patch(':id/status')
  async updateMemberStatus(
    @Param('id') id: string,
    @Body() updateMemberStatusDto: UpdateMemberStatusDto,
  ): Promise<Member | Error> {
    return await this.memberService.updateMemberStatus(
      id,
      updateMemberStatusDto,
    );
  }

  /**
   * DELETE /member/{id}
   * deletes a member
   * @param {string} id
   * @returns {Promise<Member | Error>}
   */
  @Delete(':id')
  async deleteMember(@Param('id') id: string): Promise<Member | Error> {
    return await this.memberService.deleteMember(id);
  }
}
