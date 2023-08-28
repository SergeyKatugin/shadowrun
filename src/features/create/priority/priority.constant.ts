import { Priority } from './priority.type';

export const PRIORITY_TABLE: Priority[] = [
  {
    level: 'A',
    race: null,
    magical: ['full'],
    attributes: 30,
    skills: 50,
    resources: 1000000,
  },
  {
    level: 'B',
    race: null,
    magical: ['adept', 'aspect'],
    attributes: 27,
    skills: 40,
    resources: 400000,
  },
  {
    level: 'C',
    race: ['troll', 'elven'],
    magical: null,
    attributes: 24,
    skills: 34,
    resources: 90000,
  },
  {
    level: 'D',
    race: ['dwarf', 'orc'],
    magical: null,
    attributes: 21,
    skills: 30,
    resources: 20000,
  },
  {
    level: 'E',
    race: ['human'],
    magical: null,
    attributes: 18,
    skills: 27,
    resources: 5000,
  },
];
