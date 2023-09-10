import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { Character } from './character.type';
import {
  getCharacterPriorityAttributeValue,
  getSumCharacterAttributes,
} from './character.util';

export const selectorCharacter = createSelector(
  (state: RootState) => state.character,
  (character: Character) => character,
);

export const selectorCharacterName = createSelector(
  selectorCharacter,
  ({ name }: Character) => name,
);

export const selectorCharacterDescription = createSelector(
  selectorCharacter,
  ({ description }: Character) => description,
);

export const selectorCharacterGender = createSelector(
  selectorCharacter,
  ({ gender }: Character) => gender,
);

export const selectorCharacterAppearance = createSelector(
  selectorCharacter,
  ({ appearance }: Character) => appearance,
);

export const selectorCharacterMageType = createSelector(
  selectorCharacter,
  ({ mageType }: Character) => mageType,
);

export const selectorCharacterIsNameErrorRequired = createSelector(
  selectorCharacter,
  ({ requiredErrors }: Character) =>
    requiredErrors.find((error) => error === 'name'),
);

export const selectorCharacterPriority = createSelector(
  selectorCharacter,
  ({ priority }: Character) => priority,
);

export const selectorCharacterAttributes = createSelector(
  selectorCharacter,
  ({ attributes }: Character) => attributes,
);

export const selectorCharacterSelectedPriorities = createSelector(
  selectorCharacter,
  ({ selectedPriorities }: Character) => selectedPriorities,
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
