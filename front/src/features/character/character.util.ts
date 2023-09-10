import { CHANGABLE_ATTRIBUTES } from '../attribute/attribute.constant';
import { ChangeableAttribute } from '../attribute/attribute.type';
import { Priority } from '../create/priority/priority.type';

import { Character } from './character.type';

export function getCharacterPriorityAttributeValue(
  characterPriority: Character['priority'],
): Priority['attributes'] {
  if (!characterPriority) {
    return 30;
  }

  const defaultValue: Priority['attributes'] = 18;

  if (characterPriority.attributes) {
    return characterPriority.attributes;
  }

  return defaultValue;
}

export function getSumCharacterAttributes(
  characterAttributes: Character['attributes'],
): number {
  return Object.keys(CHANGABLE_ATTRIBUTES).reduce((acc: number, attribute) => {
    acc += characterAttributes[attribute as ChangeableAttribute];

    return acc;
  }, 0);
}
