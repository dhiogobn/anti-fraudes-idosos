import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialQuestionsPage } from './social-questions.page';

const routes: Routes = [
  {
    path: '',
    component: SocialQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialQuestionsPageRoutingModule {}
