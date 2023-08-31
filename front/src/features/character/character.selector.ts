import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { PriorityLevel } from '../create/priority/priority.type';

import { Character, PriorityKey } from './character.type';
import {
  getCharacterPriorityAttributeValue,
  getSumCharacterAttributes,
} from './character.util';

export const selectorCharacter = createSelector(
  (state: RootState) => state.character,
  (character: Character) => character,
);

export const selectorCharacterName = createSelector(
  (state: RootState) => state.character.name,
  (name: Character['name']) => name,
);

export const selectorCharacterDescription = createSelector(
  (state: RootState) => state.character.description,
  (description: Character['description']) => description,
);

export const selectorCharacterGender = createSelector(
  (state: RootState) => state.character.gender,
  (gender: Character['gender']) => gender,
);

export const selectorCharacterAppearance = createSelector(
  (state: RootState) => state.character.appearance,
  (appearance: Character['appearance']) => appearance,
);

export const selectorCharacterMageType = createSelector(
  (state: RootState) => state.character.mageType,
  (mageType: Character['mageType']) => mageType,
);

export const selectorCharacterIsNameErrorRequired = createSelector(
  (state: RootState) => state.character.requiredErrors,
  (errors: Character['requiredErrors']) =>
    errors.find((error) => error === 'name'),
);

export const selectorCharacterPriority = createSelector(
  (state: RootState) => state.character.priority,
  (priority: Character['priority']) => priority,
);

export const selectorCharacterAttributes = createSelector(
  (state: RootState) => state.character.attributes,
  (attributes: Character['attributes']) => attributes,
);

export const selectorIsSelectedPriority = createSelector(
  [
    (state: RootState) => state.character.priority,
    (state: RootState) => state.priority.priorityLevel,
    (state: RootState, priorityKey: PriorityKey) => priorityKey,
  ],
  (
    priority: Character['priority'],
    priorityLevel: PriorityLevel,
    priorityKey: PriorityKey,
  ) => {
    let isHasInAnyLevel = false;

    if (!priority) {
      return isHasInAnyLevel;
    }

    Object.keys(priority).forEach((level) => {
      const currentPriority = priority[level as PriorityLevel];

      if (currentPriority[priorityKey]) {
        isHasInAnyLevel = true;
      }
    });

    return isHasInAnyLevel;
  },
);

export const selectorLeftAttributes = createSelector(
  [selectorCharacterAttributes, selectorCharacterPriority],
  (
    attributes: Character['attributes'],
    characterPriority: Character['priority'],
  ): number => {
    const maxAttributes = getCharacterPriorityAttributeValue(characterPriority);
    const sumCharacterAttributes = getSumCharacterAttributes(attributes);

    return maxAttributes - sumCharacterAttributes;
  },
);
