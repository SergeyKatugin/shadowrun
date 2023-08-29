import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import {
  Character,
  CharacterMageType,
  CharacterPriority,
  CharacterPriorityPayload,
} from './character.type';

const characterFromLocalStorage = localStorage.getItem('character');

let initialState: Character = {
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
    setCharacter: (state: Character, action: PayloadAction<Character>) => {
      return action.payload;
    },
    setCharacterName: (
      state: Character,
      action: PayloadAction<Character['name']>,
    ) => {
      state.name = action.payload;
    },
    setCharacterDescription: (
      state: Character,
      action: PayloadAction<Character['description']>,
    ) => {
      state.description = action.payload;
    },
    setCharacterGender: (
      state: Character,
      action: PayloadAction<Character['gender']>,
    ) => {
      state.gender = action.payload;
    },
    setCharacterAppearance: (
      state: Character,
      action: PayloadAction<Character['appearance']>,
    ) => {
      state.appearance = action.payload;
    },
    appendCharacterError: (state: Character, action: PayloadAction<string>) => {
      state.requiredErrors.push(action.payload);
    },
    resetCharacterError: (state: Character, action: PayloadAction<string>) => {
      state.requiredErrors = state.requiredErrors.filter(
        (error) => error !== action.payload,
      );
    },
    setCharacterMageType: (
      state: Character,
      action: PayloadAction<CharacterMageType>,
    ) => {
      state.mageType = action.payload;
    },
    setCharacterPriority: (
      state: Character,
      action: PayloadAction<CharacterPriorityPayload>,
    ) => {
      const { level, key, priority } = action.payload;

      if (!state.priority) {
        state.priority = {
          [level]: {
            [key]: priority,
          },
        } as CharacterPriority;
      } else {
        state.priority = {
          [level]: {
            [key]: priority,
          },
        } as CharacterPriority;
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
