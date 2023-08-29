import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import {
  CharacterGender,
  CharacterMageType,
  CharacterPriority,
  CharacterPriorityPayload,
} from './character.type';

export type CharacterState = {
  name: string;
  description: string;
  gender: CharacterGender;
  appearance: string;
  requiredErrors: string[];
  mageType: CharacterMageType;
  priority: CharacterPriority | null;
};

const characterFromLocalStorage = localStorage.getItem('character');

let initialState: CharacterState = {
  name: '',
  description: '',
  gender: null,
  appearance: '',
  requiredErrors: [],
  mageType: null,
  priority: null,
};

if (characterFromLocalStorage) {
  initialState = JSON.parse(characterFromLocalStorage);
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter: (
      state: CharacterState,
      action: PayloadAction<CharacterState>,
    ) => {
      return action.payload;
    },
    setCharacterName: (
      state: CharacterState,
      action: PayloadAction<CharacterState['name']>,
    ) => {
      state.name = action.payload;
    },
    setCharacterDescription: (
      state: CharacterState,
      action: PayloadAction<CharacterState['description']>,
    ) => {
      state.description = action.payload;
    },
    setCharacterGender: (
      state: CharacterState,
      action: PayloadAction<CharacterState['gender']>,
    ) => {
      state.gender = action.payload;
    },
    setCharacterAppearance: (
      state: CharacterState,
      action: PayloadAction<CharacterState['appearance']>,
    ) => {
      state.appearance = action.payload;
    },
    appendCharacterError: (
      state: CharacterState,
      action: PayloadAction<string>,
    ) => {
      state.requiredErrors.push(action.payload);
    },
    resetCharacterError: (
      state: CharacterState,
      action: PayloadAction<string>,
    ) => {
      state.requiredErrors = state.requiredErrors.filter(
        (error) => error !== action.payload,
      );
    },
    setCharacterMageType: (
      state: CharacterState,
      action: PayloadAction<CharacterMageType>,
    ) => {
      state.mageType = action.payload;
    },
    setCharacterPriority: (
      state: CharacterState,
      action: PayloadAction<CharacterPriorityPayload>,
    ) => {
      const { level, priority } = action.payload;

      if (!state.priority) {
        state.priority = {
          [level]: priority,
        } as CharacterPriority;
      } else {
        state.priority[level] = priority;
      }
    },
  },
});

export const {
  setCharacter,
  setCharacterName,
  setCharacterDescription,
  setCharacterGender,
  setCharacterAppearance,
  appendCharacterError,
  resetCharacterError,
  setCharacterMageType,
  setCharacterPriority,
} = characterSlice.actions;

export default characterSlice.reducer;
