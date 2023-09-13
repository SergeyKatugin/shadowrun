import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Combobox } from '@consta/uikit/Combobox';

import i18n from '../../../../i18n';
import { selectorCharacterGender } from '../../../character/character.selector';
import { setCharacterGender } from '../../../character/character.slice';
import { CharacterGender } from '../../../character/character.type';

const ITEMS: { id: CharacterGender; label: string }[] = [
  {
    label: i18n.t('create.common.male'),
    id: 'male',
  },
  {
    label: i18n.t('create.common.female'),
    id: 'female',
  },
  {
    label: i18n.t('create.common.other'),
    id: 'other',
  },
];

const CommonCreateGenderComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const gender = useSelector(selectorCharacterGender);

  const handleChangeGender = (changedGender: CharacterGender): void => {
    dispatch(setCharacterGender(changedGender));
  };

  return (
    <Combobox
      value={{
        id: gender,
        label: t(gender as string),
      }}
      items={ITEMS}
      getItemKey={({ id }) => id || ''}
      placeholder={t('create.common.genderPlaceholder')}
      label={t('create.common.genderLabel')}
      size="s"
      onChange={(item) => handleChangeGender(item.value?.id || null)}
    />
  );
};

export default CommonCreateGenderComponent;
