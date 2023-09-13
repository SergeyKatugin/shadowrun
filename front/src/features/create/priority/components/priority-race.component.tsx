import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@consta/uikit/Card';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';

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
      <div className={cnMixSpace({ mB: 's' })}>
        {priority.race.map((race: RaceType, index: number) => {
          return (
            <React.Fragment key={race}>
              <Text as="span" size="m">
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
  const { getCardStatus, getSelectButton, isHide } = usePriority('race');
  const { t } = useTranslation();

  if (!priority.race || isHide()) {
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
        {t('create.priority.raceCreateTitle')}
      </Text>
      <div>{getMappedRaces(priority)}</div>

      {getSelectButton('race')}
    </Card>
  );
};

export default PriorityRaceComponent;
