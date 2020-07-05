import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictionaryPage } from './dictionary.page';
import { SharedModule } from '../../shared/shared.module';
import { DictionaryPageRoutingModule } from './dictionary-routing';
import { HarassmentPage } from './harassment/harassment.page';
import { OrganizationPage } from './organization/organization.page';
import { DescriptionPage } from './description/description.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    DictionaryPageRoutingModule,
  ],
  declarations: [
    DictionaryPage,
    DescriptionPage,
    OrganizationPage,
    HarassmentPage
  ]
})
export class DictionaryPageModule {}
