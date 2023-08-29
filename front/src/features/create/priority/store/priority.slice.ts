import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { PriorityLevel } from '../priority.type';

export type PriorityState = {
  priorityLevel: PriorityLevel;
};

const initialState: PriorityState = {
  priorityLevel: 'A',
};

export const prioritySlice = createSlice({
  name: 'priority',
  initialState,
  reducers: {
    setPriorityLevel: (
      state: PriorityState,
      action: PayloadAction<PriorityLevel>,
    ) => {
      state.priorityLevel = action.payload;
    },
  },
});

export const { setPriorityLevel } = prioritySlice.actions;

export default prioritySlice.reducer;
