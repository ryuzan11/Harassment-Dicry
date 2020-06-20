import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecideAnswerPage } from './decide-answer.page';

const routes: Routes = [
  {
    path: '',
    component: DecideAnswerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecideAnswerPageRoutingModule {}
