import { HttpStatus, Injectable } from '@nestjs/common';
import ObjectId from 'bson-objectid';


@Injectable()
export class CharacterService {
  public async getCharacter(id: ObjectId) {
    return {
      status: HttpStatus.OK,
      data: {
        id,
      },
    };
  }
}
