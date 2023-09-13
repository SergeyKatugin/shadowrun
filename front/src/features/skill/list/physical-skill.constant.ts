import i18n from '../../../i18n';
import { Skill } from '../skill.type';

export const PHYSICAL_SKILLS: Skill[] = [
  {
    id: '531fadbd-de4c-4d30-ba01-8315232d5ab4',
    category: 'physical',
    name: i18n.t('skill.physical.athletic'),
    linkedAttribute: 'body',
    description: i18n.t('skill.physical.athleticDescription'),
    specialization: [],
  },
  {
    id: 'f3644cd6-6055-4978-9bdf-9317db1bd8e2',
    category: 'physical',
    name: i18n.t('skill.physical.diving'),
    linkedAttribute: 'body',
    description: i18n.t('skill.physical.divingDescription'),
    specialization: [],
  },
  {
    id: 'f3644cd6-6055-4978-9bdf-9317db1bd8e2',
    category: 'physical',
    name: i18n.t('skill.physical.diving'),
    linkedAttribute: 'body',
    description: i18n.t('skill.physical.divingDescription'),
    specialization: [],
  },
  {
    id: '82059e7b-a8c0-489c-a6e5-1a52cc9bfd0e',
    category: 'physical',
    name: i18n.t('skill.physical.hiding'),
    linkedAttribute: 'dexterity',
    description: i18n.t('skill.physical.hidingDescription'),
    specialization: [],
  },
];
