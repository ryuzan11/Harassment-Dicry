import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionListPageRoutingModule } from './action-list-routing.module';

import { ActionListPage } from './action-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionListPageRoutingModule
  ],
  declarations: [ActionListPage]
})
export class ActionListPageModule {}
