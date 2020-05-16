import { IonicModule } from '@ionic/angular';
// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictionaryPage } from './dictionary.page';
import { SharedModule } from '../../shared/shared.module';
import { DictionaryPageRoutingModule } from './dictionary-routing';
import { ShowPage } from './show/show.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    DictionaryPageRoutingModule,
    // RouterModule.forChild([{ path: '', component: DictionaryPage }])
  ],
  declarations: [
    DictionaryPage,
    ShowPage
  ]
})
export class DictionaryPageModule {}
