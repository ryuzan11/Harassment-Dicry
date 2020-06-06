import { StoryList } from './story-list';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export interface List {
  stories?: [StoryList];
  created_at: firebase.firestore.FieldValue;
}
