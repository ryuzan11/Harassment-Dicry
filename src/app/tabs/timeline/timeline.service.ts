import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Story } from 'src/app/shared/models/story';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { StoryService } from 'src/app/shared/api/story.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private storiesSubject = new BehaviorSubject<Story[] | undefined>(undefined);
  public lastPageReached = new BehaviorSubject<boolean>(false);
  private nextQueryAfter: QueryDocumentSnapshot<Story>;
  private pagenationSub: Subscription;
  private findSub: Subscription;

  constructor(
    private af: AngularFirestore,
    private storyService: StoryService
  ) { }

  destroy() {
    this.unsubscribe();
  }

  private unsubscribe() {
    if (this.pagenationSub) {
      this.pagenationSub.unsubscribe();
    }

    if (this.findSub) {
      this.findSub.unsubscribe();
    }
  }

  watchStories(): Observable<Story[]> {
    return this.storiesSubject.asObservable();
  }

  watchLaxtPageReached(): Observable<boolean> {
    return this.lastPageReached.asObservable();
  }

  find() {
    try {
      const collection: AngularFirestoreCollection<Story> = this.storyService.getCollectionQuery(this.nextQueryAfter);
      this.unsubscribe();
      this.pagenationSub = collection.get().subscribe(async (first) => {
        this.nextQueryAfter = first.docs[first.docs.length - 1] as QueryDocumentSnapshot<Story>;
        await this.storyQuery(collection);
      });
    } catch (err) {
      console.error(err);
    }
  }

  private storyQuery(collection: AngularFirestoreCollection<Story>): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.findSub = collection
          // .snapshotChanges()
          .valueChanges({idField: 'storyId'})
          .pipe(map(actions => {
            return actions.map(a => {
              return (a as Story & {storyId: string});
              // return a.payload.doc.data();
            });
          })).subscribe(async (stories: (Story & {storyId: string} )[]) => {
            await this.addStories(stories);
            resolve();
          });
      } catch (err) {
        reject(err);
      }
    });
  }

  private addStories(stories: (Story & {storyId: string} )[]): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!stories || stories.length <= 0) {
        this.lastPageReached.next(true);
        resolve();
        return;
      }

      this.storiesSubject.asObservable()
        .pipe(take(1)).subscribe((currentStories: (Story & {storyId: string} )[]) => {
          if (!(currentStories && currentStories[5] && currentStories[5].storyId === stories[0].storyId)) {
            this.storiesSubject.next(currentStories !== undefined ?
              [...currentStories, ...stories] : [...stories]);
          }
          resolve();
        });
    });
  }

}
