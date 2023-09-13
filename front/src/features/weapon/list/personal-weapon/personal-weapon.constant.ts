import { Weapon } from '../../weapon.type';

import { BATON_WEAPONS } from './batons-weapon.constant';
import { STEEL_ARMS_WEAPONS } from './steel-arms-weapon.constant';

export const PERSONAL_WEAPON: Weapon[] = [
  ...BATON_WEAPONS,
  ...STEEL_ARMS_WEAPONS,
];
