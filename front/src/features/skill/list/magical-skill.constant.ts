import i18n from '../../../i18n';
import { Skill } from '../skill.type';

export const MAGICAL_SKILLS: Skill[] = [
  {
    id: 'ae0ade9b-40f1-46fa-8515-25ad193ac8b1',
    category: 'magical',
    name: i18n.t('skill.magical.auraRead'),
    linkedAttribute: 'intellect',
    description: i18n.t('skill.magical.auraReadDescription'),
    specialization: [],
  },
  {
    id: '78586022-44a1-44a4-a205-ca689beb4563',
    category: 'magical',
    name: i18n.t('skill.magical.sorcery'),
    linkedAttribute: 'willPower',
    description: i18n.t('skill.magical.sorceryDescription'),
    specialization: [],
  },
  {
    id: 'd7e4c784-8e1e-433c-88ec-5467944b9f9c',
    category: 'magical',
    name: i18n.t('skill.magical.summon'),
    linkedAttribute: 'willPower',
    description: i18n.t('skill.magical.summonDescription'),
    specialization: [],
  },
];
