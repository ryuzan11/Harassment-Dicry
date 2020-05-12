import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Story } from '../models/story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyCollection: AngularFirestoreCollection<Story>;

  constructor(public af: AngularFirestore) {
    this.storyCollection = this.af.collection<Story>('story', ref => ref.orderBy('created_at', 'desc'));
  }

  storyAdd(story: Story) {
    return this.storyCollection.add(story);
  }

  storyInit(): Observable<Story[]> {
    return this.storyCollection.valueChanges({idField: 'storyId'});
  }

  storyUpdate(story: Story, id: string): Promise<void> {
    return this.storyCollection.doc(id).update(story);
  }
}
