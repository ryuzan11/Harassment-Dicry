import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherPageRoutingModule } from './other-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OtherPage } from './other.page';
import { UserPage } from './user/user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OtherPageRoutingModule,
  ],
  declarations: [
    OtherPage,
    UserPage
  ]
})
export class OtherPageModule {}
