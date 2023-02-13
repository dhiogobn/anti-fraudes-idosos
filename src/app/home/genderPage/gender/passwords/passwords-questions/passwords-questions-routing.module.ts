import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordsQuestionsPage } from './passwords-questions.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordsQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordsQuestionsPageRoutingModule {}
