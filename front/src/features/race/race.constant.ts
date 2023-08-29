import i18n from '../../i18n';

import { RaceType } from './race.type';

export const RACE_TYPE_TO_TEXT: Record<RaceType, string> = {
  human: i18n.t('human'),
  elven: i18n.t('elven'),
  troll: i18n.t('troll'),
  dwarf: i18n.t('dwarf'),
  orc: i18n.t('orc'),
};
