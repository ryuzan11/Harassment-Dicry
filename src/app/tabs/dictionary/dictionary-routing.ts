import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryPage } from './dictionary.page';
import { ShowPage } from './show/show.page';

const routes: Routes = [
  {
    path: '',
    component:  DictionaryPage
  },
  {
    path: ':harassmentId',
    component: ShowPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryPageRoutingModule {}
