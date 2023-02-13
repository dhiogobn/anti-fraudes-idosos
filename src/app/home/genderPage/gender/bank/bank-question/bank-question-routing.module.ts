import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankQuestionPage } from './bank-question.page';

const routes: Routes = [
  {
    path: '',
    component: BankQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankQuestionPageRoutingModule {}
