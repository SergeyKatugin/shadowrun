import { Availability, Damage } from '../../types/base.type';

export type WeaponType = 'fire-arms' | 'personal';

export type WeaponMode =
  // одиночный выстрел (ОВ)
  | 'single-shot'
  // самозарядный (СЗ)
  | 'self-reload'
  // очередь (ОЧ)
  | 'queue'
  // полностью автоматический режим(ПА)
  | 'full-automatic';

export type Weapon = {
  id: string;
  name: string;
  type: WeaponType;
  hiding: number;
  damage: Damage;
  availability: Availability | null;
  price: number | null;
  streetCoefficient: number | null;
  mode?: WeaponMode[];
  ammo?: number;
  reachLevel?: number | null;
  weight?: number | null;
};
