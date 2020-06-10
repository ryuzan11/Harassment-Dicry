import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionListPage } from './action-list.page';

const routes: Routes = [
  {
    path: '',
    component: ActionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionListPageRoutingModule {}
