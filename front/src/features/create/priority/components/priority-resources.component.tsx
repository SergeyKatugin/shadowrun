import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import { usePriority } from '../priority.hook';
import { Priority } from '../priority.type';

type Props = {
  priority: Priority;
};

const PriorityResourcesComponent = ({ priority }: Props) => {
  const { getCardStatus, getSelectButton } = usePriority('resources');
  const { t } = useTranslation();

  return (
    <Card
      verticalSpace="s"
      horizontalSpace="s"
      className="vertical-container"
      status={getCardStatus('resources')}
    >
      <Text size="xl" as="h1" className="vertical-container">
        {t('resourceCreateTitle')}
      </Text>
      <Text size="s" as="div" className="vertical-container">
        {t('resourcePriorityDescription')}
      </Text>
      <div className="vertical-container">
        {t('resourceCount')}: <b>{priority.resources}</b>
      </div>

      {getSelectButton('resources')}
    </Card>
  );
};

export default PriorityResourcesComponent;
