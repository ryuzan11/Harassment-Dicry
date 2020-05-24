import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { OtherPageRoutingModule } from './other-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OtherPage } from './other.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    // OtherPageRoutingModule
    RouterModule.forChild([{ path: '', component: OtherPage }])
  ],
  declarations: [OtherPage]
})
export class OtherPageModule {}
