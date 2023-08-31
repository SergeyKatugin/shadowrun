import i18n from '../../i18n';

import { Attribute, ChangeableAttribute } from './attribute.type';

export const SETTABLE_ATTRIBUTES: ChangeableAttribute[] = [
  'body',
  'dexterity',
  'strength',
  'charisma',
  'intellect',
  'willPower',
];

export const SETTABLE_ATTRIBUTES_TO_NAME: Record<Attribute, string> = {
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
