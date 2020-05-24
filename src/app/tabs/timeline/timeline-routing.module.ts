import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelinePage } from './timeline.page';

const routes: Routes = [
  { path: '',
    component: TimelinePage,
  },
  // {
  //   path: 'timeline',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'category',
  //   redirectTo: 'menu/category',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'quiz',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'other',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelinePageRoutingModule {}
