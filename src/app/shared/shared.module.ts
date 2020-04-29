import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './ui/profile/profile.page';
import { PrefecturesService } from './service/prefectures.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ProfilePage],
  providers: [PrefecturesService],
  exports: [],
  entryComponents: [ProfilePage]
})
export class SharedModule { }
