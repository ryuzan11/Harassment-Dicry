import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelinePage } from './timeline.page';
import { ShowPage } from './show/show.page';

const routes: Routes = [
  {
    path: '',
    component: TimelinePage,
  },
  {
    path: ':storyId',
    component: ShowPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelinePageRoutingModule {}
