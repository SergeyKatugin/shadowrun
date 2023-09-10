export type ChangeableAttribute =
  | 'body'
  | 'dexterity'
  | 'strength'
  | 'charisma'
  | 'intellect'
  | 'willPower';

export type AttributeInfo = Record<ChangeableAttribute, string[]>;

export type Attribute = ChangeableAttribute | 'entity' | 'magic' | 'reaction';
