import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from '../shared/ui/ui.module';
import { DirectiveModule } from '../shared/directive/directive.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiModule,
    DirectiveModule
  ],
  exports: [
    UiModule,
    DirectiveModule
  ],
})
export class SharedModule { }
