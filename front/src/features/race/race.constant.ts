import i18n from '../../i18n';

import { RaceType } from './race.type';

export const RACE_TYPE_TO_TEXT: Record<RaceType, string> = {
  human: i18n.t('race.human'),
  elven: i18n.t('race.elven'),
  troll: i18n.t('race.troll'),
  dwarf: i18n.t('race.dwarf'),
  orc: i18n.t('race.orc'),
};
