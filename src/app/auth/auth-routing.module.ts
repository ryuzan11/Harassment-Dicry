import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPage } from './signup/signup.page';
import { SigninPage } from './signin/signin.page';
import { FirebaseUiPage } from './firebase-ui/firebase-ui.page';


const routes: Routes = [
  // {
  //   path: 'signup',
  //   component: SignupPage
  // },
  // {
  //   path: 'signin',
  //   component: SigninPage
  // },
  {
    path: 'login',
    component: FirebaseUiPage
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AuthRoutingModule { }
