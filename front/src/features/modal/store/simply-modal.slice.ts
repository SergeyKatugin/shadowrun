import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { SimpleViewModal } from '../modal.type';

export type ModalState = SimpleViewModal;

const initialState: ModalState = {} as SimpleViewModal;

export const simplyModalSlice = createSlice({
  name: 'simply-modal',
  initialState,
  reducers: {
    setSimplyView: (
      state: ModalState,
      action: PayloadAction<SimpleViewModal>,
    ) => {
      const { title, description } = action.payload;

      state.title = title;
      state.description = description;
    },
    resetSimplyView: () => {
      return {} as SimpleViewModal;
    },
  },
});

export const { setSimplyView, resetSimplyView } = simplyModalSlice.actions;

export default simplyModalSlice.reducer;
