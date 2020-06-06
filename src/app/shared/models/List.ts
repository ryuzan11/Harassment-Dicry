import { ListStory } from './list-story';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export interface List {
  name: string | undefined;
  children?: [ListStory];
  created_at?: firebase.firestore.FieldValue;
}
