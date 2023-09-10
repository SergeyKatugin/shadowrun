import { Weapon } from '../weapon.type';

export const ASSAULT_RIFLE_WEAPONS: Weapon[] = [
  {
    id: 'd2a96e60-d7b2-48e4-bfb3-7d583032377c',
    type: 'rifle',
    name: 'АК-97',
    hiding: 3,
    ammo: 38,
    mode: ['self-reload', 'single-shot', 'full-automatic'],
    damage: {
      rating: 8,
      level: 'moderate',
    },
    price: 700,
    streetCoefficient: 2,
    availability: [3, { value: 36, dateType: 'hours' }],
  },
  {
    id: '3859a70d-1bfd-4243-ad84-4ecafaad1112',
    type: 'rifle',
    name: 'АК-98',
    hiding: 2,
    ammo: 38,
    mode: ['self-reload', 'single-shot', 'full-automatic'],
    damage: {
      rating: 8,
      level: 'moderate',
    },
    price: 2500,
    streetCoefficient: 4,
    availability: [8, { value: 4, dateType: 'day' }],
  },
  {
    id: 'cc15b8dc-9c47-49bf-9a1a-80b0efaf0c97',
    type: 'rifle',
    name: 'FN HAR',
    hiding: 2,
    ammo: 35,
    mode: ['self-reload', 'single-shot', 'full-automatic'],
    damage: {
      rating: 8,
      level: 'moderate',
    },
    price: 1200,
    streetCoefficient: 2,
    availability: [4, { value: 4, dateType: 'hours' }],
  },
];
