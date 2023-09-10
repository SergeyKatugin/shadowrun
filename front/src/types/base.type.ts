import { Attribute } from '../features/attribute/attribute.type';

export type DamageLevel =
  // Малый(М)
  | 'small'
  // Умеренный(У)
  | 'moderate'
  // Серьезный(С)
  | 'serious'
  // Летальный(Л)
  | 'lethal';

export type DamageType = 'physical' | 'stun';

export type Damage = {
  rating: number | Attribute;
  level: DamageLevel;
  type?: DamageType;
  modifier?: number;
};

export type Availability = [
  number,
  {
    value: number;
    dateType: 'hours' | 'day';
  },
];
