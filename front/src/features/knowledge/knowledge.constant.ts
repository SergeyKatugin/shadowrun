import { ACADEMIC_KNOWLEDGE } from './list/academic-knowledge.constant';
import { SIXTH_WORLD_KNOWLEDGE } from './list/sixth-world-knowledge.constant';
import { STREET_KNOWLEDGE } from './list/street-knowledge.constant';
import { Knowledge } from './knowledge.type';

export const KNOWLEDGE_LIST: Knowledge[] = [
  ...STREET_KNOWLEDGE,
  ...ACADEMIC_KNOWLEDGE,
  ...SIXTH_WORLD_KNOWLEDGE,
];
