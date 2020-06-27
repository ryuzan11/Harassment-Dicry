import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LpPage } from './lp.page';

const routes: Routes = [
  {
    path: '',
    component: LpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LpPageRoutingModule {}
