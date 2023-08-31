export type ChangeableAttribute =
  | 'body'
  | 'dexterity'
  | 'strength'
  | 'charisma'
  | 'intellect'
  | 'willPower';

export type Attribute = ChangeableAttribute | 'entity' | 'magic' | 'reaction';

export type AttributeLevel = 1 | 2 | 3 | 4 | 5 | 6;
