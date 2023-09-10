import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store';
import { PRIORITY_TABLE } from '../priority.constant';
import { PriorityLevel, PriorityWithLevel } from '../priority.type';

import { PriorityState } from './priority.slice';

export const selectorPriority = createSelector(
  (state: RootState) => state.priority,
  (priority: PriorityState) => priority,
);

export const selectorPriorityLevel = createSelector(
  selectorPriority,
  ({ priorityLevel }: PriorityState) => priorityLevel,
);

export const selectorCurrentPriority = createSelector(
  selectorPriorityLevel,
  (priorityLevel: PriorityLevel): PriorityWithLevel => {
    return (
      PRIORITY_TABLE.find(
        (priority: PriorityWithLevel) => priority.level === priorityLevel,
      ) || PRIORITY_TABLE[0]
    );
  },
);
