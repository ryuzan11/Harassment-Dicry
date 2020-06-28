import { ListStory } from './list-story';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export interface List {
  name: string | undefined;
  type: 'public' | 'private';
  children: ListStory[];
  created_at: firebase.firestore.FieldValue;
}
