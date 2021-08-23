export class CreateTeamDto {
  id: string;
  name: string;
  coach: string;
  captain: string | null;
  status: Status;
}

enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
