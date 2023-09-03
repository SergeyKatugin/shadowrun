import { PickType } from '@nestjs/swagger';
import { CharacterDto } from './character.dto';


export class GetCharacterParamDto extends PickType(CharacterDto, ['_id']) {}
