import i18n from '../../i18n';

import { MagicCharacterType } from './magic.type';

export const MAGIC_CHARACTER_TYPE_TO_TEXT: Record<MagicCharacterType, string> =
  {
    full: i18n.t('magic.fullMage'),
    aspect: i18n.t('magic.aspectMage'),
    adept: i18n.t('magic.adeptMage'),
  };
