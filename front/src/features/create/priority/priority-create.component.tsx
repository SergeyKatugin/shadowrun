import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';

import { RouteName } from '../../../constants/route.constant';
import useMount from '../../../hooks/use-mount.hook';
import { setFooter } from '../../footer/footer.slice';

import PriorityAttributeComponent from './components/priority-attribute.component';
import PriorityMagicalComponent from './components/priority-magical.component';
import PriorityRaceComponent from './components/priority-race.component';
import PriorityResourcesComponent from './components/priority-resources.component';
import PrioritySkillsComponent from './components/priority-skills.component';
import PriorityStepsComponent from './components/priority-steps.component';
import {
  selectorCurrentPriority,
  selectorPriorityLevel,
} from './store/priority.selector';

import './priority.scss';

const PriorityCreateComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priorityLevel = useSelector(selectorPriorityLevel);
  const priority = useSelector(selectorCurrentPriority);

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

      <PriorityStepsComponent selectedLevel={priorityLevel} />

      <PriorityRaceComponent priority={priority} />

      <PriorityMagicalComponent priority={priority} />

      <PriorityAttributeComponent priority={priority} />

      <PrioritySkillsComponent priority={priority} />
      <PriorityResourcesComponent priority={priority} />
    </>
  );
};

export default PriorityCreateComponent;
