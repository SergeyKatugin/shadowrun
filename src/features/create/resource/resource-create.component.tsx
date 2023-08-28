import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';

import { RouteName } from '../../../constants/route.constant';
import useMount from '../../../hooks/use-mount.hook';
import i18n from '../../../i18n';
import { selectorCharacterMageType } from '../../character/character.selector';
import {
  resetFooter,
  setFooter,
  updateFooterText,
} from '../../footer/footer.slice';

const NEXT_STEP: Record<string, string> = {
  full: i18n.t('createFullMage'),
  aspect: i18n.t('createAspectMage'),
  adept: i18n.t('createAdeptMage'),
};

const ResourceCreateComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mageType = useSelector(selectorCharacterMageType);

  useEffect(() => {
    updateFooterText(mageType === null ? t('finish') : NEXT_STEP[mageType]);
  }, [mageType, t]);

  useMount(() => {
    dispatch(
      setFooter({
        text: t('finish'),
        action: () => {
          if (mageType !== null) {
            navigate(RouteName.MageCreate);
          } else {
            navigate(RouteName.Character);
            dispatch(resetFooter());
          }
        },
        backAction: () => {
          navigate(-1);
        },
      }),
    );
  });

  return (
    <>
      <Text size="xl" as="h1" className="mb-s">
        {t('resourceTitle')}
      </Text>
      <Text size="s" as="span" className="mb-s">
        {t('resourceDescription')}
      </Text>
    </>
  );
};

export default ResourceCreateComponent;
