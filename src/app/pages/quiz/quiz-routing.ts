import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPage } from '../quiz/quiz.page';
import { ShowPage } from './show/show.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage,
  },
  {
    path: ':categoryId/:quizId',
    component: ShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizPageRoutingModule {}
