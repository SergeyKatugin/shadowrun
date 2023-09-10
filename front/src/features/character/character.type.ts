import { RatingLevel } from '../../types/rating.type';
import { Attribute } from '../attribute/attribute.type';
import { Priority, PriorityLevel } from '../create/priority/priority.type';

export type CharacterGender = 'male' | 'female' | 'other' | null;

export type CharacterMageType = 'full' | 'aspect' | 'adept' | null;

export type PriorityKey = keyof Priority;

export type CharacterKey = keyof Character;

export type CharacterPriority = Priority;

export type CharacterPriorityPayload = {
  key: PriorityKey;
  priority: Priority[PriorityKey];
};

export type CharacterRemovePriorityPayload = {
  key: PriorityKey;
};

export type CharacterSetAttributePayload = {
  key: Attribute;
  rating: RatingLevel;
};

export type CharacterAttributes = Record<Attribute, RatingLevel>;

export type Character = {
  name: string;
  description: string;
  gender: CharacterGender;
  appearance: string;
  requiredErrors: string[];
  mageType: CharacterMageType;
  priority: CharacterPriority | null;
  selectedPriorities: PriorityLevel[];
  attributes: CharacterAttributes;
};
