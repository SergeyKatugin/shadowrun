import { DefaultItem } from '@consta/uikit/Combobox';

export type KnowledgeCategory =
  | 'street'
  | 'academic'
  | 'sixth-world'
  | 'related'
  | 'interest';

export type Knowledge = {
  id: string;
  category: KnowledgeCategory;
  name: string;
  specialization: DefaultItem[];
  description?: string;
};
