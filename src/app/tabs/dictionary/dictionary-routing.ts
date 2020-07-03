import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryPage } from './dictionary.page';
import { HarassmentPage } from './harassment/harassment.page';
import { OrganizationPage } from './organization/organization.page';

const routes: Routes = [
  {
    path: '',
    component:  DictionaryPage
  },
  {
    path: 'harassment/:harassmentId',
    component: HarassmentPage,
  },
  {
    path: 'organization/:harassmentId',
    component: OrganizationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryPageRoutingModule {}
