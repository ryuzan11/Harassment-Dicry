import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';
import { UserShowResolver } from './user-show.resolver';

const routes: Routes = [
  {
    path: ':userId',
    component: UserPage,
    resolve: {
      show: UserShowResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
