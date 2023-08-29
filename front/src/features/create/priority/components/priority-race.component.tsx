import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

import i18n from '../../../../i18n';
import { RACE_TYPE_TO_TEXT } from '../../../race/race.constant';
import { RaceType } from '../../../race/race.type';
import { usePriority } from '../priority.hook';
import { Priority } from '../priority.type';

type Props = {
  priority: Priority;
};

const getMappedRaces = (priority: Priority) => {
  if (priority.race && priority.race.length > 0) {
    return (
      <div>
        <Text size="l" as="span">
          {i18n.t('raceCreateTitle')}:
        </Text>
        {priority.race.map((race: RaceType, index: number) => {
          return (
            <React.Fragment key={race}>
              <Text as="span" size="s">
                {RACE_TYPE_TO_TEXT[race]}
              </Text>
              {index !== priority.race!.length - 1 && <span>/</span>}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  return <div>-</div>;
};

const PriorityRaceComponent = ({ priority }: Props) => {
  const { getCardStatus, getSelectButton } = usePriority();
  const { t } = useTranslation();

  if (!priority.race) {
    return null;
  }

  return (
    <Card
      verticalSpace="s"
      horizontalSpace="s"
      className="vertical-container"
      status={getCardStatus('race')}
    >
      <Text size="xl" as="h1" className="vertical-container">
        {t('raceCreateTitle')}
      </Text>
      <div>{getMappedRaces(priority)}</div>

      {getSelectButton('race')}
    </Card>
  );
};

export default PriorityRaceComponent;
