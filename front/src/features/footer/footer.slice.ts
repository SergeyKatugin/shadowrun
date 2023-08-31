import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type FooterState = {
  text?: string;
  action?: () => void;
  backAction?: () => void;
  disabled?: boolean;
};

const initialState: FooterState = {};

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    setFooter: (state: FooterState, action: PayloadAction<FooterState>) => {
      const {
        text,
        action: payloadAction,
        backAction,
        disabled,
      } = action.payload;

      if (text) {
        state.text = text;
      }

      if (action) {
        state.action = payloadAction;
      }

      if (backAction) {
        state.backAction = backAction;
      }

      if (disabled) {
        state.disabled = disabled;
      }

      return state;
    },
    setFooterDisabled: (state: FooterState, action: PayloadAction<boolean>) => {
      state.disabled = action.payload;
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

export const { setFooter, resetFooter, updateFooterText, setFooterDisabled } =
  footerSlice.actions;

export default footerSlice.reducer;
