import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import { RouteName } from '../../../constants/route.constant';
import { selectorCharacterName } from '../../character/character.selector';
import {
  appendCharacterError,
  resetCharacterError,
} from '../../character/character.slice';
import { resetFooter, setFooter } from '../../footer/footer.slice';

import CommonCreateAppearanceComponent from './components/common-create-appearance.component';
import CommonCreateDescriptionComponent from './components/common-create-description.component';
import CommonCreateGenderComponent from './components/common-create-gender.component';
import CommonCreateNameComponent from './components/common-create-name.component';

const cn = block('common-create');

const CommonCreateComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const name = useSelector(selectorCharacterName);

  const validateAndNext = useCallback((): void => {
    if (name) {
      dispatch(resetCharacterError('name'));

      navigate(RouteName.PriorityCreate);
    } else {
      dispatch(appendCharacterError('name'));
    }
  }, [dispatch, name, navigate]);

  useEffect(() => {
    dispatch(
      setFooter({
        text: t('selectPriority'),
        action: () => validateAndNext(),
        backAction: () => {
          dispatch(resetFooter());
          navigate(RouteName.Home);
        },
      }),
    );
  }, [dispatch, navigate, t, validateAndNext]);

  return (
    <>
      <div className={`vertical-container ${cn()}`}>
        <Text size="xl" as="h1" className="mb-s">
          {t('create')}
        </Text>
        <Text size="s" as="span" className="mb-s">
          {t('createDescription')}
        </Text>
      </div>

      <div className="vertical-container">
        <CommonCreateNameComponent />
      </div>

      <div className="vertical-container">
        <CommonCreateDescriptionComponent />
      </div>

      <div className="vertical-container">
        <CommonCreateGenderComponent />
      </div>

      <div className="vertical-container">
        <CommonCreateAppearanceComponent />
      </div>
    </>
  );
};

export default CommonCreateComponent;
