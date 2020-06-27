import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseUiPage } from './firebase-ui.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseUiPageRoutingModule {}
