import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPageRoutingModule } from './show-routing.module';
import { ShowPage } from './show.page';
import { SharedModule } from '../../../shared/shared.module';
import { EditableTextPage } from 'src/app/shared/ui/editable-text/editable-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    // ShowPageRoutingModule
  ],
  declarations: [
    ShowPage,
    EditableTextPage
  ]
})
export class ShowPageModule {}
