import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { CardPropStatus } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import { RootState } from '../../../store';
import {
  selectorCharacterPriority,
  selectorIsSelectedPriority,
} from '../../character/character.selector';
import {
  removeCharacterPriority,
  setCharacterPriority,
} from '../../character/character.slice';
import { PriorityKey } from '../../character/character.type';

import { selectorCurrentPriority } from './store/priority.selector';

export const usePriority = (priorityKey: PriorityKey) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const priority = useSelector(selectorCurrentPriority);
  const characterPriority = useSelector(selectorCharacterPriority);
  const isSelectedPriority = useSelector((state: RootState) =>
    selectorIsSelectedPriority(state, priorityKey),
  );

  function getCardStatus(key: PriorityKey): CardPropStatus | undefined {
    return characterPriority?.[priority.level]?.[key] ? 'success' : undefined;
  }

  function setActiveCharacterPriority(key: PriorityKey): void {
    dispatch(
      setCharacterPriority({
        level: priority.level,
        key,
        priority: priority[key],
      }),
    );
  }

  function removeActiveCharacterPriority(key: PriorityKey): void {
    dispatch(
      removeCharacterPriority({
        level: priority.level,
        key,
      }),
    );
  }

  function getSelectButton(key: PriorityKey): React.ReactNode {
    if (characterPriority?.[priority.level]?.[key]) {
      return (
        <Button
          size="s"
          label={t('deselect')}
          onClick={() => removeActiveCharacterPriority(key)}
        />
      );
    }

    if (isSelectedPriority) {
      return (
        <Text size="s" weight="bold">
          {t('selectedInAnother')}
        </Text>
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
    isSelectedPriority,
  };
};
