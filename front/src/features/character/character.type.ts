import { Priority, PriorityLevel } from '../create/priority/priority.type';

export type CharacterGender = 'male' | 'female' | 'other' | null;

export type CharacterMageType = 'full' | 'aspect' | 'adept' | null;

export type CharacterPriority = Record<PriorityLevel, Priority>;

export type CharacterPriorityPayload = {
  level: PriorityLevel;
  priority: Priority;
};
