import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum EntityEnum {
  Team = 'TEAM',
  Match = 'MATCH',
  Person = 'PERSON',
}

export enum Action {
  Add = 'ADD',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

@Entity()
export class Audit {
  @PrimaryGeneratedColumn('uuid')
  private id: string;
  get getId(): string {
    return this.id;
  }

  @Column({
    type: 'enum',
    enum: ['Team', 'Match', 'Person'],
    enumName: 'EntityEnum',
    nullable: false,
  })
  private entity: EntityEnum;
  get getEntity(): EntityEnum {
    return this.entity;
  }

  @Column({
    type: 'enum',
    enum: ['Add', 'Update', 'Delete'],
    enumName: 'Action',
    nullable: false,
  })
  private action: Action;
  get getAction(): Action {
    return this.action;
  }

  @Column({ type: 'jsonb', nullable: false })
  private new_value: any;
  get getNewValue(): any {
    return this.new_value;
  }

  @Column({ type: 'timestamp with time zone', nullable: false })
  private modified_at: string;
  get getModifiedAt(): string {
    return this.modified_at;
  }

  constructor(
    id: string,
    entity: EntityEnum,
    action: Action,
    new_value: string,
    modified_at: string,
  ) {
    this.id = id;
    this.entity = entity;
    this.action = action;
    this.new_value = new_value;
    this.modified_at = modified_at;
  }
}
