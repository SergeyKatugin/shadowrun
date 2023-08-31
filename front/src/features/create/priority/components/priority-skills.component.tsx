import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import { usePriority } from '../priority.hook';
import { Priority } from '../priority.type';

type Props = {
  priority: Priority;
};

const PrioritySkillsComponent = ({ priority }: Props) => {
  const { getCardStatus, getSelectButton } = usePriority('skills');
  const { t } = useTranslation();

  return (
    <Card
      verticalSpace="s"
      horizontalSpace="s"
      className="vertical-container"
      status={getCardStatus('skills')}
    >
      <Text size="xl" as="h1" className="vertical-container">
        {t('skillCreateTitle')}
      </Text>
      <Text size="s" as="div" className="vertical-container">
        {t('skillDetailDescription')}
      </Text>
      <div className="vertical-container">
        {t('skillsCount')}: <b>{priority.skills}</b>
      </div>

      {getSelectButton('skills')}
    </Card>
  );
};

export default PrioritySkillsComponent;
