import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryPostPage } from './story-post.page';

const routes: Routes = [
  {
    path: '',
    component: StoryPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryPostPageRoutingModule {}
