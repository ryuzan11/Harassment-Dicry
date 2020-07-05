import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherPage } from './other.page';
import { UserPage } from './user/user.page';
import { UserShowResolver } from './user/user-show.resolver';

const routes: Routes = [
  { path: '',
    component: OtherPage,
  },
  {
    path: 'user/:userId',
    component: UserPage,
    resolve: {
      show: UserShowResolver
    }
  },
  {
    path: 'term',
    loadChildren: () => import('./term/term.module').then( m => m.TermPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPageRoutingModule {}
