import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { StoryPostPageRoutingModule } from './story-post-routing.module';

import { StoryPostPage } from './story-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // StoryPostPageRoutingModule
  ],
  declarations: [StoryPostPage]
})
export class StoryPostPageModule {}
