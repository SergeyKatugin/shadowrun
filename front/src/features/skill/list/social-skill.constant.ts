import i18n from '../../../i18n';
import { Skill } from '../skill.type';

export const SOCIAL_SKILLS: Skill[] = [
  {
    id: 'c147749d-e173-423d-b7eb-a96c3ee4a7e9',
    category: 'social',
    name: i18n.t('skill.social.etiquette'),
    linkedAttribute: 'charisma',
    description: i18n.t('skill.social.etiquetteDescription'),
    specialization: [],
  },
  {
    id: '81193457-f0ab-4567-bc25-0bdc9a3a3b3f',
    category: 'social',
    name: i18n.t('skill.social.briefing'),
    linkedAttribute: 'charisma',
    description: i18n.t('skill.social.briefingDescription'),
    specialization: [],
  },
  {
    id: 'b92399cf-06da-40b3-a584-2ef1c4a8de10',
    category: 'social',
    name: i18n.t('skill.social.interrogation'),
    linkedAttribute: 'charisma',
    description: i18n.t('skill.social.interrogationDescription'),
    specialization: [],
  },
  {
    id: 'd3da2bbd-ddad-4a7b-88d8-6717ac3f79b8',
    category: 'social',
    name: i18n.t('skill.social.intimidation'),
    linkedAttribute: 'charisma',
    description: i18n.t('skill.social.intimidationDescription'),
    specialization: [],
  },
  {
    id: '28fefaf5-a574-45e5-b0f5-2bc3fa152551',
    category: 'social',
    name: i18n.t('skill.social.leadership'),
    linkedAttribute: 'charisma',
    description: i18n.t('skill.social.leadershipDescription'),
    specialization: [],
  },
  {
    id: '02bd7910-cb1a-42a3-8a05-a557f437c255',
    category: 'social',
    name: i18n.t('skill.social.negotiation'),
    linkedAttribute: 'charisma',
    description: i18n.t('skill.social.negotiationDescription'),
    specialization: [],
  },
];
