import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Story } from '../models/story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  _passStory: Story;
  storyCollection: AngularFirestoreCollection<Story>;

  get passStory(): Story {
    return this._passStory;
  }

  set passStory(story: Story) {
    this._passStory = story;
  }

  constructor(public af: AngularFirestore) {
    this.storyCollection = this.af.collection<Story>('story', ref => ref.orderBy('created_at', 'desc'));
  }

  addStory(story: Story) {
    return this.storyCollection.add(story);
  }

  initStory(): Observable<Story[]> {
    return this.storyCollection.valueChanges({idField: 'storyId'});
  }

  updateStory(story: Story, id: string): Promise<void> {
    return this.storyCollection.doc(id).update(story);
  }

  deleteStory(id: string): Promise<any> {
    return this.storyCollection.doc(id).delete().then(() => {
      return '削除しました';
    }).catch((error) => {
      return error;
    });
  }
}
