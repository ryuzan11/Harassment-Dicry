import { List } from './list';

export interface Quiz {
  'id': string;
  'quiz': string;
  'choices': List<string>;
  'correct': string;
  'description': string;
  'state': 'public' | 'private';
  'category': string;
  'harassments': List<string>;
}
