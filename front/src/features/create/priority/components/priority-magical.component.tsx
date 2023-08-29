import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@consta/uikit/Card';
import { Collapse } from '@consta/uikit/Collapse';
import { Text } from '@consta/uikit/Text';

import { MAGIC_CHARACTER_TYPE_TO_TEXT } from '../../../magic/magic.constant';
import { MagicCharacterType } from '../../../magic/magic.type';
import { usePriority } from '../priority.hook';
import { Priority } from '../priority.type';

type Props = {
  priority: Priority;
};

const getMappedMagical = (priority: Priority) => {
  if (priority.magical && priority.magical.length > 0) {
    return (
      <div>
        {priority.magical.map((magical: MagicCharacterType) => {
          return (
            <span key={magical}>{MAGIC_CHARACTER_TYPE_TO_TEXT[magical]}</span>
          );
        })}
      </div>
    );
  }

  return <div>-</div>;
};

const PriorityMagicalComponent = ({ priority }: Props) => {
  const { getCardStatus, getSelectButton } = usePriority();
  const { t } = useTranslation();
  const [isGermeticOpened, setGermeticOpened] = useState<boolean>(false);
  const [isShamanOpened, setShamanOpened] = useState<boolean>(false);

  if (!priority.magical) {
    return null;
  }

  return (
    <Card
      verticalSpace="s"
      horizontalSpace="s"
      className="vertical-container"
      status={getCardStatus('magical')}
    >
      <Text size="xl" as="h1" className="vertical-container">
        {getMappedMagical(priority)}
      </Text>
      <div className="vertical-container">
        <Text size="s" className="white-space_pre-line">
          {t('fullMagicalDescription')}
        </Text>
        <Collapse
          label={t('fullMagicalGermetic')}
          size="s"
          isOpen={isGermeticOpened}
          onClick={() => setGermeticOpened(!isGermeticOpened)}
        >
          <Text size="s">{t('fullMagicalGermeticDescription')}</Text>
        </Collapse>
        <Collapse
          label={t('fullMagicalShaman')}
          size="s"
          isOpen={isShamanOpened}
          onClick={() => setShamanOpened(!isShamanOpened)}
        >
          <Text size="s">{t('fullMagicalShamanDescription')}</Text>
        </Collapse>
      </div>

      {getSelectButton('magical')}
    </Card>
  );
};

export default PriorityMagicalComponent;