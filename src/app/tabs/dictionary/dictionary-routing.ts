import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryPage } from './dictionary.page';
import { HarassmentPage } from './harassment/harassment.page';
import { OrganizationPage } from './organization/organization.page';
import { DescriptionPage } from './description/description.page';

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
    path: 'organization/:organizationId',
    component: OrganizationPage,
  },
  {
    path: 'description/:descriptionId',
    component: DescriptionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryPageRoutingModule {}
