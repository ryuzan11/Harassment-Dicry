import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from '../ui/profile/profile.page';
import { DictionaryParentComponent } from '../ui/dictionary-parent/dictionary-parent.component';
import { DictionaryChildrenComponent } from '../ui/dictionary-children/dictionary-children.component';
import { DictionaryDetailComponent } from '../ui/dictionary-detail/dictionary-detail.component';
import { StoryPostPage } from '../ui/story-post/story-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents: [
    ProfilePage,
    DictionaryParentComponent,
    DictionaryChildrenComponent,
    DictionaryDetailComponent,
    StoryPostPage,
  ],
  declarations: [
    ProfilePage,
    DictionaryParentComponent,
    DictionaryChildrenComponent,
    DictionaryDetailComponent,
    StoryPostPage,
  ]
})
export class UiModule { }
