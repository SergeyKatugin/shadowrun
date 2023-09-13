import i18n from '../../i18n';

import { Attribute, AttributeInfo } from './attribute.type';

export const CHANGABLE_ATTRIBUTES: AttributeInfo = {
  body: [
    i18n.t('attribute.bodyLevel1'),
    i18n.t('attribute.bodyLevel2'),
    i18n.t('attribute.bodyLevel3'),
    i18n.t('attribute.bodyLevel4'),
    i18n.t('attribute.bodyLevel5'),
    i18n.t('attribute.bodyLevel6'),
  ],
  dexterity: [
    i18n.t('attribute.dexterityLevel1'),
    i18n.t('attribute.dexterityLevel2'),
    i18n.t('attribute.dexterityLevel3'),
    i18n.t('attribute.dexterityLevel4'),
    i18n.t('attribute.dexterityLevel5'),
    i18n.t('attribute.dexterityLevel6'),
  ],
  strength: [
    i18n.t('attribute.strengthLevel1'),
    i18n.t('attribute.strengthLevel2'),
    i18n.t('attribute.strengthLevel3'),
    i18n.t('attribute.strengthLevel4'),
    i18n.t('attribute.strengthLevel5'),
    i18n.t('attribute.strengthLevel6'),
  ],
  charisma: [
    i18n.t('attribute.charismaLevel1'),
    i18n.t('attribute.charismaLevel2'),
    i18n.t('attribute.charismaLevel3'),
    i18n.t('attribute.charismaLevel4'),
    i18n.t('attribute.charismaLevel5'),
    i18n.t('attribute.charismaLevel6'),
  ],
  intellect: [
    i18n.t('attribute.intellectLevel1'),
    i18n.t('attribute.intellectLevel2'),
    i18n.t('attribute.intellectLevel3'),
    i18n.t('attribute.intellectLevel4'),
    i18n.t('attribute.intellectLevel5'),
    i18n.t('attribute.intellectLevel6'),
  ],
  willPower: [
    i18n.t('attribute.willPowerLevel1'),
    i18n.t('attribute.willPowerLevel2'),
    i18n.t('attribute.willPowerLevel3'),
    i18n.t('attribute.willPowerLevel4'),
    i18n.t('attribute.willPowerLevel5'),
    i18n.t('attribute.willPowerLevel6'),
  ],
};

export const CHANGABLE_ATTRIBUTES_TO_NAME: Record<Attribute, string> = {
  body: i18n.t('attribute.body'),
  dexterity: i18n.t('attribute.dexterity'),
  strength: i18n.t('attribute.strength'),
  charisma: i18n.t('attribute.charisma'),
  intellect: i18n.t('attribute.intellect'),
  willPower: i18n.t('attribute.willPower'),
  entity: i18n.t('attribute.entity'),
  magic: i18n.t('attribute.magic'),
  reaction: i18n.t('attribute.reaction'),
};
