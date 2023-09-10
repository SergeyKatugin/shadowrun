import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { randomizeRatings } from '../../utils/random.util';
import { PriorityLevel } from '../create/priority/priority.type';

import {
  Character,
  CharacterMageType,
  CharacterPriority,
  CharacterPriorityPayload,
  CharacterRemovePriorityPayload,
  CharacterSetAttributePayload,
} from './character.type';

const characterFromLocalStorage = localStorage.getItem('character');

const defaultState: Character = {
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
  selectedPriorities: [],
};

let initialState = { ...defaultState };

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
      const { key, priority } = action.payload;

      state.priority = {
        ...(state.priority || {}),
        [key]: priority,
      } as CharacterPriority;
    },
    removeCharacterPriority: (
      state: Character,
      action: PayloadAction<CharacterRemovePriorityPayload>,
    ) => {
      const { key } = action.payload;

      if (!state.priority) {
        return;
      }

      delete state.priority[key];
    },
    changeCharacterAttribute: (
      state: Character,
      action: PayloadAction<CharacterSetAttributePayload>,
    ) => {
      const { key, rating } = action.payload;

      state.attributes[key] = rating;
    },
    randomizeCharacterAttributes: (state: Character) => {
      const priorityAttributes = state.priority?.attributes;

      if (!priorityAttributes) {
        return;
      }

      const randomizedAttributes = randomizeRatings(
        {
          body: defaultState.attributes.body,
          charisma: defaultState.attributes.charisma,
          dexterity: defaultState.attributes.dexterity,
          intellect: defaultState.attributes.intellect,
          strength: defaultState.attributes.strength,
          willPower: defaultState.attributes.willPower,
        },
        priorityAttributes,
      );

      state.attributes = {
        ...state.attributes,
        ...randomizedAttributes,
      };
    },
    setSelectedPriority: (
      state: Character,
      action: PayloadAction<PriorityLevel>,
    ) => {
      state.selectedPriorities.push(action.payload);
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
  randomizeCharacterAttributes,
  setSelectedPriority,
} = characterSlice.actions;

export default characterSlice.reducer;
