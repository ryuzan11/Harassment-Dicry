import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from '../shared/ui/ui.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiModule
  ],
  exports: [UiModule],
})
export class SharedModule { }
