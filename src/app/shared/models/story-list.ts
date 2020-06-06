import { DocumentReference } from '@angular/fire/firestore/interfaces';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export interface StoryList {
  storyId: string;
  storyRef: DocumentReference;
  created_at: firebase.firestore.FieldValue;
}
