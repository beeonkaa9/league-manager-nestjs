import { Team } from '../../team/models/team.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
@Entity()
export class Match {
  @PrimaryColumn({ type: 'uuid' })
  private id: string;
  get getId(): string {
    return this.id;
  }

  @Column({ type: 'character varying', nullable: false })
  private home: string;
  get getHome(): string {
    return this.home;
  }

  @Column({ type: 'character varying', nullable: false })
  private away: string;
  get getAway(): string {
    return this.away;
  }

  @Column({ type: 'integer', nullable: false })
  private home_score: number;
  get getHomeScore(): number {
    return this.home_score;
  }

  @Column({ type: 'integer', nullable: false })
  private away_score: number;
  get getAwayScore(): number {
    return this.away_score;
  }

  @Column({ type: 'timestamp with time zone', nullable: false })
  private played: string;
  get getPlayed(): string {
    return this.played;
  }

  @Column({ type: 'character varying', nullable: false })
  private location: string;
  get getLocation(): string {
    return this.location;
  }

  @ManyToOne(() => Team, (team) => team.matches)
  @JoinColumn({ name: 'home', referencedColumnName: 'id' })
  @JoinColumn({ name: 'away', referencedColumnName: 'id' })
  team: Team;

  constructor(
    id: string,
    home: string,
    away: string,
    home_score: number,
    away_score: number,
    played: string,
    location: string,
  ) {
    this.id = id;
    this.home = home;
    this.away = away;
    this.home_score = home_score;
    this.away_score = away_score;
    this.played = played;
    this.location = location;
  }
}
