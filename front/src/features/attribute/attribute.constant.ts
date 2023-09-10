import i18n from '../../i18n';

import { Attribute, AttributeInfo } from './attribute.type';

export const CHANGABLE_ATTRIBUTES: AttributeInfo = {
  body: [
    i18n.t('bodyLevel1'),
    i18n.t('bodyLevel2'),
    i18n.t('bodyLevel3'),
    i18n.t('bodyLevel4'),
    i18n.t('bodyLevel5'),
    i18n.t('bodyLevel6'),
  ],
  dexterity: [
    i18n.t('dexterityLevel1'),
    i18n.t('dexterityLevel2'),
    i18n.t('dexterityLevel3'),
    i18n.t('dexterityLevel4'),
    i18n.t('dexterityLevel5'),
    i18n.t('dexterityLevel6'),
  ],
  strength: [
    i18n.t('strengthLevel1'),
    i18n.t('strengthLevel2'),
    i18n.t('strengthLevel3'),
    i18n.t('strengthLevel4'),
    i18n.t('strengthLevel5'),
    i18n.t('strengthLevel6'),
  ],
  charisma: [
    i18n.t('charismaLevel1'),
    i18n.t('charismaLevel2'),
    i18n.t('charismaLevel3'),
    i18n.t('charismaLevel4'),
    i18n.t('charismaLevel5'),
    i18n.t('charismaLevel6'),
  ],
  intellect: [
    i18n.t('intellectLevel1'),
    i18n.t('intellectLevel2'),
    i18n.t('intellectLevel3'),
    i18n.t('intellectLevel4'),
    i18n.t('intellectLevel5'),
    i18n.t('intellectLevel6'),
  ],
  willPower: [
    i18n.t('willPowerLevel1'),
    i18n.t('willPowerLevel2'),
    i18n.t('willPowerLevel3'),
    i18n.t('willPowerLevel4'),
    i18n.t('willPowerLevel5'),
    i18n.t('willPowerLevel6'),
  ],
};

export const CHANGABLE_ATTRIBUTES_TO_NAME: Record<Attribute, string> = {
  body: i18n.t('attributeBody'),
  dexterity: i18n.t('attributeDexterity'),
  strength: i18n.t('attributeStrength'),
  charisma: i18n.t('attributeCharisma'),
  intellect: i18n.t('attributeIntellect'),
  willPower: i18n.t('attributeWillPower'),
  entity: i18n.t('attributeEntity'),
  magic: i18n.t('attributeMagic'),
  reaction: i18n.t('attributeReaction'),
};
