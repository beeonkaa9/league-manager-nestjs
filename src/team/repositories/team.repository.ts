import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateMemberDto } from 'src/member/dtos/update-member.dto';
import { Member } from 'src/member/models/member.entity';
import { MemberRepository } from 'src/member/repositories/member.repository';
import { Role, Status } from 'src/person/models/person.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateTeamStatusDto } from '../dtos/update-team-status.dto';
import { UpdateTeamDto } from '../dtos/update-team.dto';
import { Team } from '../models/team.entity';

export interface ITeamRepository {
  createTeam(team: Team): Promise<Team>;
  findTeamById(id: string): Promise<Team>;
  //   //any will most likely change; any for now since I don't think it can be Team[]
  //   getTeamMatches(id: string): Promise<any>;
  getTeamMembers(id: string, status?: Status, role?: Role): Promise<Member[]>;
  // getTeamStats(id: string): Promise<any>;
  updateTeamById(team: Team, updateTeamDto: UpdateTeamDto): Promise<Team>;
  updateTeamStatus(
    team: Team,
    updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team>;
  //   deleteTeam(id: string): Promise<Team>;
}

@Injectable()
@EntityRepository(Team)
export class TeamRepository
  extends Repository<Team>
  implements ITeamRepository
{
  constructor(
    @InjectRepository(MemberRepository)
    private memberRepository: MemberRepository,
  ) {
    super();
  }

  public async createTeam(team: Team): Promise<Team> {
    return await this.save(team);
  }

  public async findTeamById(id: string): Promise<Team> {
    try {
      return await this.findOneOrFail(id);
    } catch {
      throw new NotFoundException('this id does not exist in the teams table');
    }
  }

  public async getTeamMembers(
    id: string,
    status?: Status,
    role?: Role,
  ): Promise<Member[]> {
    let query: any = this.memberRepository
      .createQueryBuilder()
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

  public async updateTeamById(
    team: Team,
    updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return await this.save({ ...team, ...updateTeamDto });
  }

  public async updateTeamStatus(
    team: Team,
    updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team> {
    return await this.save({ ...team, ...updateTeamStatusDto });
  }
}
