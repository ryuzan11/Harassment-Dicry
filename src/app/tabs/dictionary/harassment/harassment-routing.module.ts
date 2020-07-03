import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarassmentPage } from './harassment.page';

const routes: Routes = [
  {
    path: '',
    component: HarassmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarassmentPageRoutingModule {}
