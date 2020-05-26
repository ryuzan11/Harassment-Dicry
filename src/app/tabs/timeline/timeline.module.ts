import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TimelinePage } from './timeline.page';
import { TimelinePageRoutingModule } from '../timeline/timeline-routing.module';
import { ShowPage } from './show/show.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TimelinePageRoutingModule,
    // RouterModule.forChild([{ path: '', component: TimelinePage }])
  ],
  declarations: [
    TimelinePage,
    ShowPage
  ]
})
export class TimelinePageModule {}
