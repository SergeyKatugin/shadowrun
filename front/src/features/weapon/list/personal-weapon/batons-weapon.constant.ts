import i18n from '../../../../i18n';
import { Weapon } from '../../weapon.type';

export const BATON_WEAPONS: Weapon[] = [
  {
    id: 'd6b36361-86fe-47ff-9026-9e1a6a89fc87',
    type: 'personal',
    name: i18n.t('weapon.personal.batonName'),
    hiding: 5,
    reachLevel: 5,
    damage: {
      rating: 'strength',
      level: 'moderate',
      type: 'stun',
      modifier: 1,
    },
    weight: 1,
    availability: [2, { value: 6, dateType: 'hours' }],
    price: 10,
    streetCoefficient: 1,
  },
  {
    id: '374b342f-9959-4b3b-b9ed-6b8a0a388483',
    type: 'personal',
    name: i18n.t('weapon.personal.cueBallName'),
    hiding: 8,
    reachLevel: null,
    damage: {
      rating: 'strength',
      level: 'moderate',
      type: 'stun',
      modifier: 2,
    },
    weight: null,
    availability: [2, { value: 6, dateType: 'hours' }],
    price: 10,
    streetCoefficient: 1,
  },
  {
    id: '525c915c-e9ce-4eee-b2c7-3a2c26dad6a0',
    type: 'personal',
    name: i18n.t('weapon.personal.stunBatonName'),
    hiding: 4,
    reachLevel: 1,
    damage: {
      rating: 6,
      level: 'serious',
      type: 'stun',
    },
    weight: 1,
    availability: [3, { value: 36, dateType: 'hours' }],
    price: 750,
    streetCoefficient: 1,
  },
];
