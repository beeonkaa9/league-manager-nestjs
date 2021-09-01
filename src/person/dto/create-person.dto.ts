export class CreatePersonDto {
  id: string;
  name: string;
  last_name: string;
  phone: number;
  email: string;
  dob: string;
  role: Role;
  status: Status;
  age: number;
}

enum Role {
  Manager = 'MANAGER',
  Coach = 'COACH',
  Referee = 'REFEREE',
  Linesman = 'LINESMAN',
  MedicalStaff = 'MEDICALSTAFF',
  Captain = 'CAPTAIN',
  ScoreKeeper = 'SCOREKEEPER',
  Goalkeeper = 'GOALKEEPER',
  RightFullback = 'RIGHTFULLBACK',
  LeftFullback = 'LEFTFULLBACK',
  CenterBack = 'CENTERBACK',
  Sweeper = 'SWEEPER',
  DefendingMidfielder = 'DEFENDINGMIDFIELDER',
  RightMidfielder = 'RIGHTMIDFIELDER',
  CentralMidfielder = 'CENTRALMIDFIELDER',
  Striker = 'STRIKER',
  AttackingMidfielder = 'ATTACKINGMIDFIELDER',
  LeftMidfielder = 'LEFTMIDFIELDER',
}

enum Status {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
  suspended = 'SUSPENDED',
}
