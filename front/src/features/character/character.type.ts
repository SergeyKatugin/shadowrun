import { Attribute, AttributeLevel } from '../attribute/attribute.type';
import { Priority, PriorityLevel } from '../create/priority/priority.type';

export type CharacterGender = 'male' | 'female' | 'other' | null;

export type CharacterMageType = 'full' | 'aspect' | 'adept' | null;

export type PriorityKey = keyof Priority;

export type CharacterKey = keyof Character;

export type CharacterPriority = Record<
  PriorityLevel,
  Record<PriorityKey, Priority[PriorityKey]>
>;

export type CharacterPriorityPayload = {
  level: PriorityLevel;
  key: PriorityKey;
  priority: Priority[PriorityKey];
};

export type CharacterRemovePriorityPayload = {
  key: PriorityKey;
  level: PriorityLevel;
};

export type CharacterSetAttributePayload = {
  key: Attribute;
  level: AttributeLevel;
};

export type CharacterAttributes = Record<Attribute, AttributeLevel>;

export type Character = {
  name: string;
  description: string;
  gender: CharacterGender;
  appearance: string;
  requiredErrors: string[];
  mageType: CharacterMageType;
  priority: CharacterPriority | null;
  attributes: CharacterAttributes;
};
