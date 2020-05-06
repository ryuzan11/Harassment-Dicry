import { Organization } from './organizarion';

export interface Organizations {
  'name': string;
  children?: Organization[];
}
