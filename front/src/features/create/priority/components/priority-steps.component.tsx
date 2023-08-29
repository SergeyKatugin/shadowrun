import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Steps } from '@consta/uikit/Steps';

import { PriorityLevel } from '../priority.type';
import { setPriorityLevel } from '../store/priority.slice';

type Props = {
  selectedLevel: PriorityLevel;
};

const PriorityStepsComponent = ({ selectedLevel }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChangeStep = (level: PriorityLevel): void => {
    dispatch(setPriorityLevel(level));
  };

  const items: PriorityLevel[] = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="vertical-container">
      <Steps
        items={items}
        value={selectedLevel}
        getItemLabel={(item: PriorityLevel) =>
          `${t('priorityLabel')} - ${item}`
        }
        size="s"
        onChange={({ value }) => handleChangeStep(value)}
      />
    </div>
  );
};

export default PriorityStepsComponent;
