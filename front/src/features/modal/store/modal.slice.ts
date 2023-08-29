import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ModalType } from '../modal.type';

export type ModalState = {
  [key in ModalType]: boolean;
};

const initialState: ModalState = {
  attribute: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state: ModalState, action: PayloadAction<ModalType>) => {
      const modalType = action.payload;

      state[modalType] = !state[modalType];
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
