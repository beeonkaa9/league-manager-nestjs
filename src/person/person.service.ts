import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  /*
  GET /person/{id}:
  this returns only person data (no members)
  */
  findOne(id: string) {
    //find a person that is also not a member
  }
}
