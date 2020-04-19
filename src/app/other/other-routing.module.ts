import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherPage } from './other.page';

const routes: Routes = [
  {
    path: '',
    component: OtherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherPageRoutingModule {}
