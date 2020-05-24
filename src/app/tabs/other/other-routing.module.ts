import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherPage } from './other.page';

const routes: Routes = [
  { path: '',
    component: OtherPage,
  },
  {
    path: 'timeline',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'category',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'other',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPageRoutingModule {}
