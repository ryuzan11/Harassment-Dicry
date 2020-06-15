import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditableTextPage } from './editable-text.page';

const routes: Routes = [
  {
    path: '',
    component: EditableTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditableTextPageRoutingModule {}
