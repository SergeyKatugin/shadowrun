import { MagicCharacterType } from '../../magic/magic.type';
import { RaceType } from '../../race/race.type';

export type PriorityLevel = 'A' | 'B' | 'C' | 'D' | 'E';

export type Priority = {
  level: PriorityLevel;
  race: RaceType[] | null;
  magical: MagicCharacterType[] | null;
  attributes: 30 | 27 | 24 | 21 | 18;
  skills: 50 | 40 | 34 | 30 | 27;
  resources: 1000000 | 400000 | 90000 | 20000 | 5000;
};
