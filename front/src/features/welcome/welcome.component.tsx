import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';

import { RouteName } from '../../constants/route.constant';

const WelcomeComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Text size="xl" as="h1" className="mb-s">
        {t('welcome.title')}
      </Text>
      <Text className={cnMixSpace({ mB: 's' })}>
        {t('welcome.description')}
      </Text>
      <Text className={cnMixSpace({ mB: 'l' })}>
        {t('welcome.description2')}
      </Text>
      <Text className={cnMixSpace({ mB: 's' })}>
        {t('welcome.description3')}
      </Text>
      <Text className={cnMixSpace({ mB: 'l' })}>
        {t('welcome.description4')}
      </Text>

      <Button
        size="s"
        label={t('welcome.start')}
        width="full"
        onClick={() => navigate(RouteName.Common)}
      />
    </>
  );
};

export default WelcomeComponent;
