import { Controller, Get, Param } from '@nestjs/common';

import { CharacterService } from './services';
import { IResponse } from './types';
import { GetCharacterParamDto } from './dto';


@Controller('character')
export class CharacterController {
  constructor(
    private readonly characterService: CharacterService,
  ) {
  }

  @Get('/:_id')
  public async getCharacter(
    @Param() param: GetCharacterParamDto,
  ): Promise<IResponse<any>> {
    return this.characterService.getCharacter(param._id);
  }
}
