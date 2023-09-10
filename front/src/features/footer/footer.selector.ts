import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { FooterState } from './footer.slice';

export const selectorFooter = createSelector(
  (state: RootState) => state.footer,
  (footer: FooterState) => footer,
);

export const selectorIsFooterDisabled = createSelector(
  selectorFooter,
  (footer: FooterState) => footer.disabled,
);
