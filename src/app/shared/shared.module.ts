import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile/profile.page';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ProfilePage, TabsComponent],
  exports: [TabsComponent],
  entryComponents: [ProfilePage]
})
export class SharedModule { }
