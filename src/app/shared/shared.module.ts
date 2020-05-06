import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './ui/profile/profile.page';
import { PrefecturesService } from './service/prefectures.service';
import { DictionaryParentComponent } from './ui/dictionary-top/dictionary-parent.component';
import { DictionaryChildrenComponent } from './ui/dictionary-children/dictionary-children.component';
import { DictionaryDetailComponent } from './ui/dictionary-detail/dictionary-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ProfilePage,
    DictionaryParentComponent,
    DictionaryChildrenComponent,
    DictionaryDetailComponent
  ],
  providers: [PrefecturesService],
  exports: [],
  entryComponents: [
    ProfilePage,
    DictionaryParentComponent,
    DictionaryChildrenComponent,
    DictionaryDetailComponent
  ]
})
export class SharedModule { }
