import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Match {
  @PrimaryColumn()
  private id: string;
  get getId(): string {
    return this.id;
  }

  @Column()
  private home: string;
  get getHome(): string {
    return this.home;
  }

  @Column()
  private away: string;
  get getAway(): string {
    return this.away;
  }

  @Column()
  private home_score: number;
  get getHomeScore(): number {
    return this.home_score;
  }

  @Column()
  private away_score: number;
  get getAwayScore(): number {
    return this.away_score;
  }

  @Column({ type: 'timestamp with time zone' })
  private played: string;
  get getPlayed(): string {
    return this.played;
  }

  @Column()
  private location: string;
  get getLocation(): string {
    return this.location;
  }
}
