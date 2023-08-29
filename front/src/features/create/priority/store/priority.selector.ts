import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store';
import { PRIORITY_TABLE } from '../priority.constant';
import { Priority, PriorityLevel } from '../priority.type';

export const selectorPriorityLevel = createSelector(
  (state: RootState) => state.priority.priorityLevel,
  (priorityLevel: PriorityLevel) => priorityLevel,
);

export const selectorCurrentPriority = createSelector(
  (state: RootState) => state.priority.priorityLevel,
  (priorityLevel: PriorityLevel): Priority => {
    return (
      PRIORITY_TABLE.find(
        (priority: Priority) => priority.level === priorityLevel,
      ) || PRIORITY_TABLE[0]
    );
  },
);
