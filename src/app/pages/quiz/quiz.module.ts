import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizPage } from './quiz.page';
import { SharedModule } from '../../shared/shared.module';
// import { QuizPageRoutingModule } from './quiz-routing';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // QuizPageRoutingModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: QuizPage }])
  ],
  declarations: [QuizPage]
})
export class QuizPageModule {}
