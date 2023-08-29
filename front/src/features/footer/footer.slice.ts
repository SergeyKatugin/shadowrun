import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type FooterState = {
  text?: string;
  action?: () => void;
  backAction?: () => void;
};

const initialState: FooterState = {};

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    setFooter: (state: FooterState, action: PayloadAction<FooterState>) => {
      const { text, action: payloadAction, backAction } = action.payload;

      if (text) {
        state.text = text;
      }

      if (action) {
        state.action = payloadAction;
      }

      if (backAction) {
        state.backAction = backAction;
      }

      return state;
    },
    resetFooter: (state: FooterState) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.text = undefined;
    },
    updateFooterText: (
      state: FooterState,
      action: PayloadAction<FooterState['text']>,
    ) => {
      if (state.text) {
        state.text = action.payload;
      }
    },
  },
});

export const { setFooter, resetFooter, updateFooterText } = footerSlice.actions;

export default footerSlice.reducer;
