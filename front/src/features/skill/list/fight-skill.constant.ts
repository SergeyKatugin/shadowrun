import { DefaultItem } from '@consta/uikit/Combobox';

import i18n from '../../../i18n';
import { CyberImplant } from '../../cyber-implant/cyber-implant.type';
import { FIGHT_BODY_WEAR } from '../../cyber-implant/list/fight-body-wear.constant';
import { ASSAULT_RIFLE_WEAPONS } from '../../weapon/list/assault-rifles-weapon.constant';
import { BATON_WEAPONS } from '../../weapon/list/personal-weapon/batons-weapon.constant';
import { STEEL_ARMS_WEAPONS } from '../../weapon/list/personal-weapon/steel-arms-weapon.constant';
import { Weapon } from '../../weapon/weapon.type';
import { Skill } from '../skill.type';

export const FIGHT_SKILLS: Skill[] = [
  {
    id: '5666a1cd-a066-4b7c-9e14-454cee7a6a99',
    category: 'fight',
    name: i18n.t('skill.assaultRifle'),
    linkedAttribute: 'dexterity',
    description: i18n.t('skill.assaultRifleDescription'),
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
    name: i18n.t('skill.baton'),
    linkedAttribute: 'strength',
    description: i18n.t('skill.batonDescription'),
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
    name: i18n.t('skill.cyberImplant'),
    linkedAttribute: 'strength',
    description: i18n.t('skill.cyberImplantDescription'),
    specialization: FIGHT_BODY_WEAR.map((cyberImplant: CyberImplant) => {
      return {
        id: cyberImplant.id,
        label: cyberImplant.name,
      } as DefaultItem;
    }),
  },
  {
    id: 'b2060434-e1ac-410f-ae62-54aef41e4ce7',
    category: 'fight',
    name: i18n.t('skill.steelArms'),
    description: i18n.t('skill.steelArmsDescription'),
    linkedAttribute: 'strength',
    specialization: STEEL_ARMS_WEAPONS.map((steelArmWeapon: Weapon) => {
      return {
        id: steelArmWeapon.id,
        label: steelArmWeapon.name,
      } as DefaultItem;
    }),
  },
  {
    id: '545958b1-265d-4243-b837-f01195c3cfdd',
    category: 'fight',
    name: i18n.t('skill.artillery'),
    description: i18n.t('skill.artilleryDescription'),
    linkedAttribute: 'intellect',
    specialization: [
      {
        id: 'small-turret',
        label: i18n.t('transport.custom.smallTurret'),
      },
      {
        id: 'miniTurret',
        label: i18n.t('transport.custom.miniTurret'),
      },
      {
        id: 'autoGunAres',
        label: i18n.t('transport.custom.autoGunAres'),
      },
      {
        id: 'waterGun',
        label: i18n.t('transport.custom.waterGun'),
      },
    ],
  },
  {
    id: 'b10480ab-0415-41a0-82d0-0eb5f2d82bac',
    category: 'fight',
    name: i18n.t('skill.heavyWeapon'),
    description: i18n.t('skill.heavyWeaponDescription'),
    linkedAttribute: 'strength',
    specialization: [],
  },
  {
    id: 'fc004b8f-851a-44cf-8f98-cd4fab238200',
    category: 'fight',
    name: i18n.t('skill.laserWeapon'),
    description: i18n.t('skill.laserWeaponDescription'),
    linkedAttribute: 'dexterity',
    specialization: [],
  },
  {
    id: 'f09d3aaa-09d8-4f52-b66e-913e659be677',
    category: 'fight',
    name: i18n.t('skill.launchers'),
    description: i18n.t('skill.launchersDescription'),
    linkedAttribute: 'intellect',
    specialization: [],
  },
  {
    id: '7e36ae6e-4845-4907-8c43-4139929768de',
    category: 'fight',
    name: i18n.t('skill.pistols'),
    description: i18n.t('skill.pistolsDescription'),
    linkedAttribute: 'dexterity',
    specialization: [],
  },
  {
    id: '2f70b535-9716-4619-8795-0300e481414a',
    category: 'fight',
    name: i18n.t('skill.staff'),
    description: i18n.t('skill.staffDescription'),
    linkedAttribute: 'strength',
    specialization: [],
  },
  {
    id: '3d4b172f-edf2-4334-9818-6501287db519',
    category: 'fight',
    name: i18n.t('skill.projectileWeapon'),
    description: i18n.t('skill.projectileWeaponDescription'),
    linkedAttribute: 'strength',
    specialization: [],
  },
  {
    id: 'dd513b81-8adc-490e-a263-472f080760d6',
    category: 'fight',
    name: i18n.t('skill.rifle'),
    description: i18n.t('skill.rifleDescription'),
    linkedAttribute: 'dexterity',
    specialization: [],
  },
  {
    id: '8fc579e0-be62-491d-b471-49580d040fa6',
    category: 'fight',
    name: i18n.t('skill.shotgun'),
    description: i18n.t('skill.shotgunDescription'),
    linkedAttribute: 'dexterity',
    specialization: [],
  },
  {
    id: '993345e7-1836-479d-b6cb-822db37d8c44',
    category: 'fight',
    name: i18n.t('skill.submachineGun'),
    description: i18n.t('skill.submachineGunDescription'),
    linkedAttribute: 'dexterity',
    specialization: [],
  },
  {
    id: '1a318d8b-5c7d-4090-8d43-7df52d49b495',
    category: 'fight',
    name: i18n.t('skill.throwingWeapon'),
    description: i18n.t('skill.throwingWeaponDescription'),
    linkedAttribute: 'strength',
    specialization: [],
  },
  {
    id: 'e77f1129-7ea6-4eae-9305-8868d61399d8',
    category: 'fight',
    name: i18n.t('skill.noWeapon'),
    description: i18n.t('skill.noWeaponDescription'),
    linkedAttribute: 'strength',
    specialization: [],
  },
  {
    id: 'b8123fde-9ca6-40c3-8656-a35c3c13e7ef',
    category: 'fight',
    name: i18n.t('skill.underwater'),
    description: i18n.t('skill.underwaterDescription'),
    linkedAttribute: 'strength',
    specialization: [],
  },
  {
    id: '0424d6e2-4958-4621-bf2d-8d245d971377',
    category: 'fight',
    name: i18n.t('skill.whips'),
    description: i18n.t('skill.whipsDescription'),
    linkedAttribute: 'strength',
    specialization: [],
  },
];
