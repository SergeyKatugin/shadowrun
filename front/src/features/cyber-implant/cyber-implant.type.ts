import { Availability, Damage } from '../../types/base.type';

export type CyberImplant = {
  id: string;
  name: string;
  entity: number;
  price: number;
  availability: Availability;
  streetCoefficient: number;
  description?: string;
  damage?: Damage;
  isAddPrice?: boolean;
  children?: CyberImplant[];
};
