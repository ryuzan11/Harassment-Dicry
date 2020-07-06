import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { LpPage } from './lp.page';
import { PolicyPage } from './policy/policy.page';
import { TermPage } from './term/term.page';

const redirectLoggedIn = () => redirectLoggedInTo(['/main/timeline']);

const routes: Routes = [
  {
    path: '',
    component: LpPage,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedIn }
  },
  {
    path: 'policy',
    component: PolicyPage
  },
  {
    path: 'term',
    component: TermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LpPageRoutingModule {}
