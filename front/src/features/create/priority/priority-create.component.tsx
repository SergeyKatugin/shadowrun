import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';

import { RouteName } from '../../../constants/route.constant';
import i18n from '../../../i18n';
import { setFooter } from '../../footer/footer.slice';

import PriorityAttributeComponent from './components/priority-attribute.component';
import PriorityMagicalComponent from './components/priority-magical.component';
import PriorityRaceComponent from './components/priority-race.component';
import PriorityResourcesComponent from './components/priority-resources.component';
import PrioritySkillsComponent from './components/priority-skills.component';
import {
  selectorCurrentPriority,
  selectorPriorityLevel,
} from './store/priority.selector';
import { setPriorityLevel } from './store/priority.slice';
import { PriorityLevel } from './priority.type';

import './priority.scss';

type Map = {
  nextText: string;
  nextPriority: PriorityLevel | null;
  prevPriority: PriorityLevel | null;
};

const MAP_PRIORITY: Record<PriorityLevel, Map> = {
  A: {
    nextText: i18n.t('menu.toBPriority'),
    nextPriority: 'B',
    prevPriority: null,
  },
  B: {
    nextText: i18n.t('menu.toCPriority'),
    nextPriority: 'C',
    prevPriority: 'A',
  },
  C: {
    nextText: i18n.t('menu.toDPriority'),
    nextPriority: 'D',
    prevPriority: 'B',
  },
  D: {
    nextText: i18n.t('menu.toEPriority'),
    nextPriority: 'E',
    prevPriority: 'C',
  },
  E: {
    nextText: i18n.t('menu.priorityNext'),
    nextPriority: null,
    prevPriority: 'D',
  },
};

const PriorityCreateComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priorityLevel = useSelector(selectorPriorityLevel);
  const priority = useSelector(selectorCurrentPriority);

  useEffect(() => {
    const { nextText, nextPriority, prevPriority } =
      MAP_PRIORITY[priorityLevel];

    dispatch(
      setFooter({
        text: nextText,
        action: () => {
          if (nextPriority === null) {
            navigate(RouteName.AttributeCreate);
          } else {
            dispatch(setPriorityLevel(nextPriority));
          }
        },
        backAction: () => {
          if (prevPriority === null) {
            navigate(-1);

            return;
          }

          dispatch(setPriorityLevel(prevPriority));
        },
      }),
    );
  }, [dispatch, navigate, priorityLevel]);

  return (
    <>
      <Text size="xl" as="h1" className="vertical-container">
        {t('create.priority.createPriority')}
      </Text>

      <Text size="s" className="vertical-container">
        {t('create.priority.descriptionPriority')}
      </Text>

      <Text size="s" className="vertical-container">
        {t('create.priority.detailPriority')}
      </Text>

      <PriorityRaceComponent priority={priority} />
      <PriorityMagicalComponent priority={priority} />
      <PriorityAttributeComponent priority={priority} />
      <PrioritySkillsComponent priority={priority} />
      <PriorityResourcesComponent priority={priority} />
    </>
  );
};

export default PriorityCreateComponent;
