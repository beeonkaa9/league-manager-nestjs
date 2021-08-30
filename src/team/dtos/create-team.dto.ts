export class CreateTeamDto {
  id: string;
  name: string;
  coach: string;
  captain: string | null;
  status: teamStatus;
}

export enum teamStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
