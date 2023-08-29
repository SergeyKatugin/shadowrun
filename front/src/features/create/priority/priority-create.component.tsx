import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Radio } from '@consta/uikit/Radio';
import { Steps } from '@consta/uikit/Steps';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import { RouteName } from '../../../constants/route.constant';
import useMount from '../../../hooks/use-mount.hook';
import i18n from '../../../i18n';
import { setFooter } from '../../footer/footer.slice';
import { MAGIC_CHARACTER_TYPE_TO_TEXT } from '../../magic/magic.constant';
import { MagicCharacterType } from '../../magic/magic.type';
import { RACE_TYPE_TO_TEXT } from '../../race/race.constant';
import { RaceType } from '../../race/race.type';

import { PRIORITY_TABLE } from './priority.constant';
import { Priority, PriorityLevel } from './priority.type';

import './priority.scss';

const cn = block('priority');

const getMappedRaces = (
  priority: Priority,
  // characterPriority: CharacterPriority | null,
) => {
  if (priority.race && priority.race.length > 0) {
    return (
      <div className={cn('item')}>
        <Radio checked />
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

  return null;
};

const getMappedMagical = (
  priority: Priority,
  // characterPriority: CharacterPriority | null,
) => {
  if (priority.magical && priority.magical.length > 0) {
    return (
      <div className={cn('item')}>
        <Radio checked />
        <Text size="l" as="span">
          {i18n.t('magicalCreateTitle')}
        </Text>

        {priority.magical.map((magical: MagicCharacterType, index: number) => {
          return (
            <React.Fragment key={magical}>
              <Text as="span" size="s">
                {MAGIC_CHARACTER_TYPE_TO_TEXT[magical]}
              </Text>
              {index !== priority.magical!.length - 1 && <span>/</span>}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  return null;
};

const PriorityCreateComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState<PriorityLevel>('A');
  const [currentPriority, setCurrentPriority] = useState<Priority>(
    PRIORITY_TABLE[0],
  );

  // const characterPriority = useSelector(selectorCharacterPriority);

  useMount(() => {
    dispatch(
      setFooter({
        text: t('priorityNext'),
        action: () => {
          navigate(RouteName.AttributeCreate);
        },
        backAction: () => {
          navigate(-1);
        },
      }),
    );
  });

  useEffect(() => {
    const foundPriority = PRIORITY_TABLE.find(
      (priority: Priority) => priority.level === selectedLevel,
    );

    if (foundPriority) {
      setCurrentPriority(foundPriority);
    }
  }, [selectedLevel]);

  const handleChangeStep = (level: PriorityLevel): void => {
    setSelectedLevel(level);
  };

  const items: PriorityLevel[] = ['A', 'B', 'C', 'D', 'E'];

  return (
    <>
      <Text size="xl" as="h1" className="vertical-container">
        {t('createPriority')}
      </Text>

      <Text size="s" className="vertical-container">
        {t('descriptionPriority')}
      </Text>

      <Text size="s" className="vertical-container">
        {t('detailPriority')}
      </Text>

      <div className="vertical-container">
        <Steps
          items={items}
          value={selectedLevel}
          getItemLabel={(item: PriorityLevel) =>
            `${t('priorityLabel')} - ${item}`
          }
          size="s"
          onChange={({ value }) => handleChangeStep(value)}
        />
      </div>

      <div className={cn()}>
        <div>{currentPriority.race && getMappedRaces(currentPriority)}</div>
        <div>
          {currentPriority.magical && getMappedMagical(currentPriority)}
        </div>
        <div className={cn('item')}>
          <Radio checked />
          <Text size="l" as="span">
            {i18n.t('attributeCreateTitle')}
          </Text>
          {currentPriority.attributes}
        </div>
        <div className={cn('item')}>
          <Radio checked />
          <Text size="l" as="span">
            {i18n.t('skillCreateTitle')}
          </Text>
          {currentPriority.skills}
        </div>
        <div className={cn('item')}>
          <Radio checked />
          <Text size="l" as="span">
            {i18n.t('resourceCreateTitle')}
          </Text>
          {currentPriority.resources}¥
        </div>
      </div>
    </>
  );
};

export default PriorityCreateComponent;
