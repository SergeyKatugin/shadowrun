import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { CardPropStatus } from '@consta/uikit/Card';

import {
  selectorCharacterPriority,
  selectorCharacterSelectedPriorities,
} from '../../character/character.selector';
import {
  removeCharacterPriority,
  setCharacterPriority,
  setSelectedPriority,
} from '../../character/character.slice';
import { PriorityKey } from '../../character/character.type';

import { selectorCurrentPriority } from './store/priority.selector';

export const usePriority = (priorityKey: PriorityKey) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const priority = useSelector(selectorCurrentPriority);
  const characterPriority = useSelector(selectorCharacterPriority);
  const selectedPriorities = useSelector(selectorCharacterSelectedPriorities);

  function getCardStatus(key: PriorityKey): CardPropStatus | undefined {
    return characterPriority?.[key] ? 'success' : undefined;
  }

  function setActiveCharacterPriority(key: PriorityKey): void {
    dispatch(
      setCharacterPriority({
        key,
        priority: priority[key],
      }),
    );

    dispatch(setSelectedPriority(priority.level));
  }

  function removeActiveCharacterPriority(key: PriorityKey): void {
    dispatch(
      removeCharacterPriority({
        key,
      }),
    );
  }

  function isHide(): boolean {
    if (
      selectedPriorities.length > 0 &&
      selectedPriorities.includes(priority.level)
    ) {
      if (!characterPriority || !characterPriority[priorityKey]) {
        return true;
      }

      return characterPriority[priorityKey] === undefined;
    }

    if (characterPriority?.[priorityKey]) {
      return true;
    }

    return false;
  }

  function getSelectButton(key: PriorityKey): React.ReactNode {
    if (characterPriority?.[key]) {
      return (
        <Button
          size="s"
          label={t('deselect')}
          onClick={() => removeActiveCharacterPriority(key)}
        />
      );
    }

    return (
      <Button
        size="s"
        label={t('select')}
        onClick={() => setActiveCharacterPriority(key)}
      />
    );
  }

  return {
    getCardStatus,
    getSelectButton,
    isHide,
  };
};
