import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportModalPage } from './report-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ReportModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportModalPageRoutingModule {}
