import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LpPageRoutingModule } from './lp-routing.module';

import { LpPage } from './lp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LpPageRoutingModule
  ],
  declarations: [LpPage]
})
export class LpPageModule {}
