import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictionaryPage } from './dictionary.page';
import { SharedModule } from '../../shared/shared.module';
// import { CategoryPageRoutingModule } from './category-routing';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    // CategoryPageRoutingModule,
    RouterModule.forChild([{ path: '', component: DictionaryPage }])
  ],
  declarations: [DictionaryPage]
})
export class DictionaryPageModule {}
