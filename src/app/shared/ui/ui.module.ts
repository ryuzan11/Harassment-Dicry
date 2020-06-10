import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from '../ui/profile/profile.page';
import { CategoryParentComponent } from './category-parent/category-parent.component';
import { CategoryChildComponent } from './category-child/category-child.component';
import { DictionaryDetailComponent } from '../ui/dictionary-detail/dictionary-detail.component';
import { StoryPostPage } from '../ui/story-post/story-post.page';
import { ActionListPage } from './action-list/action-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents: [
    ProfilePage,
    CategoryParentComponent,
    CategoryChildComponent,
    DictionaryDetailComponent,
    StoryPostPage,
    ActionListPage
  ],
  declarations: [
    ProfilePage,
    CategoryParentComponent,
    CategoryChildComponent,
    DictionaryDetailComponent,
    StoryPostPage,
    ActionListPage
  ]
})
export class UiModule { }
