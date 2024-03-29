import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, TextFieldOnChangeArguments } from '@consta/uikit/TextField';

import { selectorCharacterDescription } from '../../../character/character.selector';
import { setCharacterDescription } from '../../../character/character.slice';

const CommonCreateDescriptionComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const description = useSelector(selectorCharacterDescription);

  const handleChangeDescription = (
    innerValue: TextFieldOnChangeArguments,
  ): void => {
    dispatch(setCharacterDescription(innerValue.value || ''));
  };

  return (
    <TextField
      size="s"
      value={description}
      onChange={handleChangeDescription}
      placeholder={t('create.common.descriptionPlaceholder')}
      label={t('create.common.fillDescription')}
      type="textarea"
      width="full"
      rows={5}
    />
  );
};

export default CommonCreateDescriptionComponent;
