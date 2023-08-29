import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../store';

export const selectorIsAttributeModalOpened = createSelector(
  (state: RootState) => state.modal.attribute,
  (isOpened: boolean) => isOpened,
);
