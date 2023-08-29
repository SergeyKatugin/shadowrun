import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { Character } from './character.type';

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
