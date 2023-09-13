import i18n from '../../../i18n';
import { Skill } from '../skill.type';

export const TECHNICAL_SKILLS: Skill[] = [
  {
    id: 'ecbd2596-29f2-4dd0-b95b-c7d1d50601e2',
    category: 'technical',
    name: i18n.t('skill.technical.bioTech'),
    linkedAttribute: 'intellect',
    description: i18n.t('skill.technical.bioTechDescription'),
    specialization: [],
  },
  {
    id: 'd79bf7d7-5a93-4bd4-8008-8d72f2ada45b',
    category: 'technical',
    name: i18n.t('skill.technical.computers'),
    linkedAttribute: 'intellect',
    description: i18n.t('skill.technical.computersDescription'),
    specialization: [],
  },
  {
    id: '690c6b71-ef13-4d46-b57b-05746b83ef72',
    category: 'technical',
    name: i18n.t('skill.technical.explosives'),
    linkedAttribute: 'intellect',
    description: i18n.t('skill.technical.explosivesDescription'),
    specialization: [],
  },
  {
    id: '787e69d6-51b9-4b42-972b-2915854a1132',
    category: 'technical',
    name: i18n.t('skill.technical.electronic'),
    linkedAttribute: 'intellect',
    description: i18n.t('skill.technical.electronicDescription'),
    specialization: [],
  },
];
