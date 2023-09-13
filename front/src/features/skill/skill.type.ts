import { DefaultItem } from '@consta/uikit/Combobox';

import { Attribute } from '../attribute/attribute.type';

export type SkillCategory =
  | 'fight'
  | 'magical'
  | 'technical'
  | 'physical'
  | 'social'
  | 'transport';

export type Skill = {
  id: string;
  category: SkillCategory;
  name: string;
  linkedAttribute: Attribute;
  description: string;
  specialization: DefaultItem[];
};
