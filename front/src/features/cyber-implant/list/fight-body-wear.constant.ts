import i18n from '../../../i18n';
import { CyberImplant } from '../cyber-implant.type';

export const FIGHT_BODY_WEAR: CyberImplant[] = [
  {
    id: '81340b36-d2ba-4bc5-a8c7-321d6fca17a7',
    name: i18n.t('cyberImplantHandBlade'),
    description: i18n.t('cyberImplantHandBladeDescription'),
    entity: -0.1,
    price: 7500,
    availability: [6, { value: 5, dateType: 'day' }],
    streetCoefficient: 1.5,
    damage: {
      rating: 'strength',
      level: 'small',
      modifier: 3,
    },
    children: [
      {
        id: 'f9ff77bd-cd35-4b37-8d6c-76012dbb6aa5',
        name: i18n.t('cyberImplantExtendableHandBlade'),
        description: i18n.t('cyberImplantExtendableHandBladeDescription'),
        entity: -0.25,
        price: 2500,
        isAddPrice: true,
        availability: [6, { value: 5, dateType: 'day' }],
        streetCoefficient: 1.5,
        damage: {
          rating: 'strength',
          level: 'small',
          modifier: 3,
        },
      },
    ],
  },
  {
    id: 'c3ce79ef-f538-4f01-a8c9-26e290f0fec6',
    name: i18n.t('cyberImplantManualRazors'),
    description: i18n.t('cyberImplantManualRazorsDescription'),
    entity: -0.1,
    price: 4500,
    availability: [3, { value: 72, dateType: 'hours' }],
    streetCoefficient: 1,
    damage: {
      rating: 'strength',
      level: 'small',
      modifier: 0,
    },
    children: [
      {
        id: '23ab0926-d7d7-4741-a4c9-c453982db929',
        name: i18n.t('cyberImplantEnhancedManualRazors'),
        entity: -0.1,
        price: 8500,
        isAddPrice: true,
        availability: [6, { value: 72, dateType: 'hours' }],
        streetCoefficient: 1,
        damage: {
          rating: 'strength',
          level: 'small',
          modifier: 2,
        },
      },
      {
        id: '395d48c6-67ce-48fa-928f-4ac032855143',
        name: i18n.t('cyberImplantExpandableManualRazors'),
        entity: -0.1,
        price: 4500,
        isAddPrice: true,
        availability: [5, { value: 72, dateType: 'day' }],
        streetCoefficient: 1.5,
        damage: {
          rating: 'strength',
          level: 'small',
          modifier: 3,
        },
      },
    ],
  },
  {
    id: '454f8066-d5a0-48ab-a2dd-d0d47ac7cf87',
    name: i18n.t('cyberImplantSpur'),
    description: i18n.t('cyberImplantSpurDescription'),
    entity: -0.1,
    price: 7000,
    availability: [3, { value: 72, dateType: 'hours' }],
    streetCoefficient: 1,
    damage: {
      rating: 'strength',
      level: 'moderate',
    },
    children: [
      {
        id: '6bddf1f9-9934-46b3-a8b4-d4b49134774c',
        name: i18n.t('cyberImplantExpandableSpur'),
        entity: -0.3,
        price: 4500,
        isAddPrice: true,
        availability: [5, { value: 72, dateType: 'hours' }],
        streetCoefficient: 1,
        damage: {
          rating: 'strength',
          level: 'moderate',
        },
      },
    ],
  },
];
