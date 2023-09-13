import { FIGHT_SKILLS } from './list/fight-skill.constant';
import { MAGICAL_SKILLS } from './list/magical-skill.constant';
import { PHYSICAL_SKILLS } from './list/physical-skill.constant';
import { SOCIAL_SKILLS } from './list/social-skill.constant';
import { TECHNICAL_SKILLS } from './list/technical-skill.constant';
import { TRANSPORT_SKILLS } from './list/transport-skill.constant';
import { Skill } from './skill.type';

export const SKILLS: Skill[] = [
  ...FIGHT_SKILLS,
  ...MAGICAL_SKILLS,
  ...PHYSICAL_SKILLS,
  ...SOCIAL_SKILLS,
  ...TECHNICAL_SKILLS,
  ...TRANSPORT_SKILLS,
];
