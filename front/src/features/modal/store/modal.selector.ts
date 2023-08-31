import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../store';
import { SimpleViewModal } from '../modal.type';

export const selectorIsAttributeModalOpened = createSelector(
  (state: RootState) => state.modal.attribute,
  (isOpened: boolean) => isOpened,
);

export const selectorSimplyModal = createSelector(
  (state: RootState) => state.simplyModal,
  (simplyModal: SimpleViewModal) => simplyModal,
);
