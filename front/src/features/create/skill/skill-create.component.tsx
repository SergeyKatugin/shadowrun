import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IconInfoCircle } from '@consta/icons/IconInfoCircle';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Collapse } from '@consta/uikit/Collapse';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { withTooltip } from '@consta/uikit/withTooltip';
import { block } from 'bem-cn';

import { RouteName } from '../../../constants/route.constant';
import useMount from '../../../hooks/use-mount.hook';
import i18n from '../../../i18n';
import { CHANGABLE_ATTRIBUTES_TO_NAME } from '../../attribute/attribute.constant';
import { setFooter } from '../../footer/footer.slice';
import { FIGHT_SKILLS } from '../../skill/list/fight-skill.constant';
import { MAGICAL_SKILLS } from '../../skill/list/magical-skill.constant';
import { PHYSICAL_SKILLS } from '../../skill/list/physical-skill.constant';
import { SOCIAL_SKILLS } from '../../skill/list/social-skill.constant';
import { TECHNICAL_SKILLS } from '../../skill/list/technical-skill.constant';
import { TRANSPORT_SKILLS } from '../../skill/list/transport-skill.constant';
import { Skill, SkillCategory } from '../../skill/skill.type';

import './skill-create.component.scss';

const cn = block('skill-create');

const IconWithTooltip = withTooltip({ mode: 'click' })(IconInfoCircle);

const getTooltipContent = (skill: Skill): React.ReactNode => {
  return (
    <div>
      <Text size="m" className={cnMixSpace({ mB: 's' })}>
        {i18n.t('skill.relatedAttribute')}:{' '}
        {CHANGABLE_ATTRIBUTES_TO_NAME[skill.linkedAttribute]}
      </Text>
      <Text size="s">{skill.description}</Text>
    </div>
  );
};

type SkillsByCategories = {
  title: string;
  category: SkillCategory;
  skills: Skill[];
};

const SKILL_CATEGORIES: SkillsByCategories[] = [
  {
    title: i18n.t('skill.fightingSkills'),
    category: 'fight',
    skills: FIGHT_SKILLS,
  },
  {
    title: i18n.t('skill.magicalSkills'),
    category: 'magical',
    skills: MAGICAL_SKILLS,
  },
  {
    title: i18n.t('skill.physicSkills'),
    category: 'physical',
    skills: PHYSICAL_SKILLS,
  },
  {
    title: i18n.t('skill.socialSkills'),
    category: 'social',
    skills: SOCIAL_SKILLS,
  },
  {
    title: i18n.t('skill.technicalSkills'),
    category: 'technical',
    skills: TECHNICAL_SKILLS,
  },
  {
    title: i18n.t('skill.transportSkills'),
    category: 'transport',
    skills: TRANSPORT_SKILLS,
  },
];

const SkillCreateComponent = () => {
  /** Hooks */
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** State */
  const [activeCollapse, setActiveCollapse] = useState<SkillCategory | null>(
    null,
  );

  useMount(() => {
    dispatch(
      setFooter({
        text: t('menu.skillNext'),
        action: () => {
          navigate(RouteName.KnowledgeCreate);
        },
        backAction: () => {
          navigate(-1);
        },
      }),
    );
  });

  return (
    <>
      <div className={cnMixSpace({ mB: 'l' })}>
        <Text size="xl" as="h1" className="mb-s">
          {t('skill.title')}
        </Text>

        <Text size="s" as="span">
          {t('skill.description')}
        </Text>
      </div>

      {SKILL_CATEGORIES.map((skillCategory: SkillsByCategories) => {
        return (
          <Collapse
            label={skillCategory.title}
            size="s"
            isOpen={activeCollapse === skillCategory.category}
            form="round"
            onClick={() =>
              setActiveCollapse(
                activeCollapse === skillCategory.category
                  ? null
                  : skillCategory.category,
              )
            }
          >
            <div className={`${cn()} ${cnMixSpace({ pH: 'xs' })}`}>
              {skillCategory.skills.map((skill: Skill) => {
                return (
                  <div className={cn('item')}>
                    <Checkbox checked />
                    <Text as="span">{skill.name}</Text>
                    <IconWithTooltip
                      tooltipProps={{
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        content: getTooltipContent(skill) as any,
                        direction: 'downCenter',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </Collapse>
        );
      })}
    </>
  );
};

export default SkillCreateComponent;
