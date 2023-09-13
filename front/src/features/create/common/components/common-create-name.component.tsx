import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '@consta/uikit/Layout';
import { TextField, TextFieldOnChangeArguments } from '@consta/uikit/TextField';

import { RANDOM_NAME } from '../../../../constants/name.constant';
import { IconDice } from '../../../../ui/icons/icon-dice.component';
import { randomNumber } from '../../../../utils/random.util';
import {
  selectorCharacterIsNameErrorRequired,
  selectorCharacterName,
} from '../../../character/character.selector';
import {
  resetCharacterError,
  setCharacterName,
} from '../../../character/character.slice';

const CommonCreateNameComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const name = useSelector(selectorCharacterName);
  const requiredError = useSelector(selectorCharacterIsNameErrorRequired);

  const handleChangeName = (innerValue: TextFieldOnChangeArguments): void => {
    dispatch(setCharacterName(innerValue.value || ''));
    dispatch(resetCharacterError('name'));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const randomizeName = (event: any): void => {
    if (event.target.nodeName === 'path') {
      dispatch(
        setCharacterName(RANDOM_NAME[randomNumber(0, RANDOM_NAME.length)]),
      );
      dispatch(resetCharacterError('name'));
    }
  };

  return (
    <Layout verticalAlign="top" direction="row">
      <TextField
        size="s"
        value={name}
        onChange={handleChangeName}
        placeholder={t('create.common.namePlaceholder')}
        label={t('create.common.fillName')}
        state={requiredError ? 'alert' : undefined}
        caption={requiredError ? t('base.requiredError') : undefined}
        width="full"
        onClick={randomizeName}
        rightSide={IconDice}
      />
    </Layout>
  );
};

export default CommonCreateNameComponent;
