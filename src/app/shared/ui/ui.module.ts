import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from '../ui/profile/profile.page';
import { CategoryParentComponent } from './category-parent/category-parent.component';
import { CategoryChildComponent } from './category-child/category-child.component';
import { StoryPostPage } from '../ui/story-post/story-post.page';
import { ActionListPage } from './action-list/action-list.page';
import { EditableTextPage } from './editable-text/editable-text.page';
import { DecideAnswerPage } from './decide-answer/decide-answer.page';
import { ReportModalPage } from './report-modal/report-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents: [
    ActionListPage,
    CategoryParentComponent,
    CategoryChildComponent,
    DecideAnswerPage,
    EditableTextPage,
    ProfilePage,
    ReportModalPage,
    StoryPostPage,
  ],
  declarations: [
    ActionListPage,
    CategoryParentComponent,
    CategoryChildComponent,
    DecideAnswerPage,
    EditableTextPage,
    ProfilePage,
    ReportModalPage,
    StoryPostPage,
  ],
  exports: [
    EditableTextPage
  ]
})
export class UiModule { }
