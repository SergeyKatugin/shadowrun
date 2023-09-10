import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import { toggleModal } from '../../../modal/store/modal.slice';
import { usePriority } from '../priority.hook';
import { Priority } from '../priority.type';

type Props = {
  priority: Priority;
};

const PriorityAttributeComponent = ({ priority }: Props) => {
  const { getCardStatus, getSelectButton, isHide } = usePriority('attributes');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const openAttributeDetails = () => {
    dispatch(toggleModal('attribute'));
  };

  if (isHide()) {
    return null;
  }

  return (
    <Card
      verticalSpace="s"
      horizontalSpace="s"
      className="vertical-container"
      status={getCardStatus('attributes')}
    >
      <Text size="xl" as="h1" className="vertical-container">
        {t('attributeCreateTitle')}
      </Text>
      <Text size="s" as="div" className="vertical-container">
        {t('attributeDetailDescription')}
      </Text>
      <Text
        size="s"
        className="vertical-container"
        onClick={openAttributeDetails}
        decoration="underline"
      >
        {t('moreAboutAttribute')}
      </Text>

      <div className="vertical-container">
        {t('attributeCount')}: <b>{priority.attributes}</b>
      </div>

      {getSelectButton('attributes')}
    </Card>
  );
};

export default PriorityAttributeComponent;
