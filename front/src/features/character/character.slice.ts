import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import {
  Character,
  CharacterMageType,
  CharacterPriority,
  CharacterPriorityPayload,
  CharacterRemovePriorityPayload,
  CharacterSetAttributePayload,
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
  attributes: {
    body: 1,
    charisma: 1,
    dexterity: 1,
    entity: 6,
    intellect: 1,
    magic: 6,
    reaction: 1,
    strength: 1,
    willPower: 1,
  },
};

if (characterFromLocalStorage) {
  initialState = { ...initialState, ...JSON.parse(characterFromLocalStorage) };
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
          ...state.priority,
          [level]: {
            [key]: priority,
          },
        } as CharacterPriority;
      }
    },
    removeCharacterPriority: (
      state: Character,
      action: PayloadAction<CharacterRemovePriorityPayload>,
    ) => {
      const { level, key } = action.payload;

      if (!state.priority) {
        return;
      }

      delete state.priority[level][key];
    },
    changeCharacterAttribute: (
      state: Character,
      action: PayloadAction<CharacterSetAttributePayload>,
    ) => {
      const { level, key } = action.payload;

      state.attributes[key] = level;
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
  removeCharacterPriority,
  changeCharacterAttribute,
} = characterSlice.actions;

export default characterSlice.reducer;
