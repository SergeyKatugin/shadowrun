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
  const { getCardStatus, getSelectButton, isHide } = usePriority('skills');
  const { t } = useTranslation();

  if (isHide()) {
    return null;
  }

  return (
    <Card
      verticalSpace="s"
      horizontalSpace="s"
      className="vertical-container"
      status={getCardStatus('skills')}
    >
      <Text size="xl" as="h1" className="vertical-container">
        {t('create.priority.skillCreateTitle')}
      </Text>
      <Text size="s" as="div" className="vertical-container">
        {t('create.priority.skillDetailDescription')}
      </Text>
      <div className="vertical-container">
        {t('create.priority.skillsCount')}: <b>{priority.skills}</b>
      </div>

      {getSelectButton('skills')}
    </Card>
  );
};

export default PrioritySkillsComponent;
