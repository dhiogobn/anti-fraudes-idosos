import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternetQuestionPage } from './internet-question.page';

const routes: Routes = [
  {
    path: '',
    component: InternetQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetQuestionPageRoutingModule {}
