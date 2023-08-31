import { SETTABLE_ATTRIBUTES } from '../attribute/attribute.constant';
import { ChangeableAttribute } from '../attribute/attribute.type';
import { Priority, PriorityLevel } from '../create/priority/priority.type';

import { Character } from './character.type';

export function getCharacterPriorityAttributeValue(
  characterPriority: Character['priority'],
): Priority['attributes'] {
  if (!characterPriority) {
    return 30;
  }

  let foundValue: Priority['attributes'] = 30;

  Object.keys(characterPriority).forEach((level) => {
    if (characterPriority[level as PriorityLevel].attributes) {
      foundValue = characterPriority[level as PriorityLevel]
        .attributes as Priority['attributes'];
    }
  });

  return foundValue;
}

export function getSumCharacterAttributes(
  characterAttributes: Character['attributes'],
): number {
  return SETTABLE_ATTRIBUTES.reduce(
    (acc: number, attribute: ChangeableAttribute) => {
      acc += characterAttributes[attribute];

      return acc;
    },
    0,
  );
}
