import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { CharacterState } from './character.slice';

export const selectorCharacter = createSelector(
  (state: RootState) => state.character,
  (character: CharacterState) => character,
);

export const selectorCharacterName = createSelector(
  (state: RootState) => state.character.name,
  (name: CharacterState['name']) => name,
);

export const selectorCharacterDescription = createSelector(
  (state: RootState) => state.character.description,
  (description: CharacterState['description']) => description,
);

export const selectorCharacterGender = createSelector(
  (state: RootState) => state.character.gender,
  (gender: CharacterState['gender']) => gender,
);

export const selectorCharacterAppearance = createSelector(
  (state: RootState) => state.character.appearance,
  (appearance: CharacterState['appearance']) => appearance,
);

export const selectorCharacterMageType = createSelector(
  (state: RootState) => state.character.mageType,
  (mageType: CharacterState['mageType']) => mageType,
);

export const selectorCharacterIsNameErrorRequired = createSelector(
  (state: RootState) => state.character.requiredErrors,
  (errors: CharacterState['requiredErrors']) =>
    errors.find((error) => error === 'name'),
);

export const selectorCharacterPriority = createSelector(
  (state: RootState) => state.character.priority,
  (priority: CharacterState['priority']) => priority,
);
