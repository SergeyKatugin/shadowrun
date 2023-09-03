import { ApiProperty } from '@nestjs/swagger';

import ObjectId from 'bson-objectid';
import { Transform, Type } from 'class-transformer';
import { IsDefined } from 'class-validator';

import { toObjectId } from '../utils';


export class CharacterDto {
  @ApiProperty({
    description: 'It matches \'_id\' from collection \'characters\' from DB. Valid MongoDB compatible ObjectId',
    required: true,
    example: '62a584a2f2fdd2cf95548236',
  })
  @IsDefined()
  @Transform(toObjectId)
  @Type(() => ObjectId)
  _id: ObjectId;
}
