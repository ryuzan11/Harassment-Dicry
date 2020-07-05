import { Obj } from './obj';

export interface Quiz {
  id: string;
  quiz: string;
  choices: Obj<string>;
  correct: string;
  description: string;
  state: 'public' | 'private';
  category: string;
  harassments: Obj<string>;
}
