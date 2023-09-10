import { Availability, Damage } from '../../types/base.type';

export type WeaponType =
  // Штурмовая винтонка
  | 'rifle'
  // Дробовики
  | 'shotgun'
  // Пистолеты
  | 'pistol'
  // Пистолет-пулемет
  | 'automatic-pistol'
  // Дубинка
  | 'baton';

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
  availability: Availability;
  price: number;
  streetCoefficient: number;
  mode?: WeaponMode[];
  ammo?: number;
  reachLevel?: number | null;
  weight?: number | null;
};
