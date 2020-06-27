import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupPage } from './signup/signup.page';
import { SigninPage } from './signin/signin.page';
import { FirebaseUiPage } from './firebase-ui/firebase-ui.page';


@NgModule({
  declarations: [
    SigninPage,
    SignupPage,
    FirebaseUiPage
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class AuthModule { }
