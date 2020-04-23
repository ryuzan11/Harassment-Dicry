import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './ui/profile/profile.page';
import { TabsComponent } from './ui/tabs/tabs.component';
import { PrefecturesService } from './service/prefectures.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ProfilePage, TabsComponent],
  providers: [PrefecturesService],
  exports: [TabsComponent],
  entryComponents: [ProfilePage]
})
export class SharedModule { }
