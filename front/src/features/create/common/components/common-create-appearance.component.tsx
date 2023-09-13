import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, TextFieldOnChangeArguments } from '@consta/uikit/TextField';

import { selectorCharacterAppearance } from '../../../character/character.selector';
import { setCharacterAppearance } from '../../../character/character.slice';

const CommonCreateAppearanceComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const appearance = useSelector(selectorCharacterAppearance);

  const handleChangeAppearance = (
    innerValue: TextFieldOnChangeArguments,
  ): void => {
    dispatch(setCharacterAppearance(innerValue.value || ''));
  };

  return (
    <TextField
      size="s"
      value={appearance}
      onChange={handleChangeAppearance}
      placeholder={t('create.common.appearancePlaceholder')}
      label={t('create.common.appearanceLabel')}
      type="textarea"
      width="full"
      rows={5}
    />
  );
};

export default CommonCreateAppearanceComponent;
