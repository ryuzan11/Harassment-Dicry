import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { ListPageRoutingModule } from './list-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    // ListPageRoutingModule
    RouterModule.forChild([{ path: '', component: ListPage }])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
