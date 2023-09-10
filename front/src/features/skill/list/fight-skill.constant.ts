import { DefaultItem } from '@consta/uikit/Combobox';

import i18n from '../../../i18n';
import { CyberImplant } from '../../cyber-implant/cyber-implant.type';
import { FIGHT_BODY_WEAR } from '../../cyber-implant/list/fight-body-wear.constant';
import { ASSAULT_RIFLE_WEAPONS } from '../../weapon/list/assault-rifles-weapon.constant';
import { BATON_WEAPONS } from '../../weapon/list/batons-weapon.constant';
import { Weapon } from '../../weapon/weapon.type';
import { Skill } from '../skill.type';

export const FIGHT_SKILLS: Skill[] = [
  {
    id: '5666a1cd-a066-4b7c-9e14-454cee7a6a99',
    category: 'fight',
    name: i18n.t('assaultRifleSkill'),
    linkedAttribute: 'dexterity',
    description: i18n.t('assaultRifleSkillDescription'),
    specialization: ASSAULT_RIFLE_WEAPONS.map((weapon: Weapon) => {
      return {
        id: weapon.id,
        label: weapon.name,
      } as DefaultItem;
    }),
  },
  {
    id: '15618fff-bfe3-449d-8bf5-1c8a61dfaf67',
    category: 'fight',
    name: i18n.t('batonSkill'),
    linkedAttribute: 'strength',
    description: i18n.t('batonSkillDescription'),
    specialization: BATON_WEAPONS.map((weapon: Weapon) => {
      return {
        id: weapon.id,
        label: weapon.name,
      } as DefaultItem;
    }),
  },
  {
    id: '8ce5cff8-4d95-4dbd-bbf4-a875ce243c53',
    category: 'fight',
    name: i18n.t('cyberImplantSkill'),
    linkedAttribute: 'strength',
    description: i18n.t('cyberImplantSkillDescription'),
    specialization: FIGHT_BODY_WEAR.map((cyberImplant: CyberImplant) => {
      return {
        id: cyberImplant.id,
        label: cyberImplant.name,
      } as DefaultItem;
    }),
  },
];
