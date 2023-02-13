import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'users',
    loadChildren: () => import('./userPage/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./genderPage/gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'internet-question',
    loadChildren: () => import('./genderPage/gender/internet/internet-question/internet-question.module').then( m => m.InternetQuestionPageModule)
  },
  {
    path: 'bank-question',
    loadChildren: () => import('./genderPage/gender/bank/bank-question/bank-question.module').then( m => m.BankQuestionPageModule)
  },
  {
    path: 'passwords-questions',
    loadChildren: () => import('./genderPage/gender/passwords/passwords-questions/passwords-questions.module').then( m => m.PasswordsQuestionsPageModule)
  },
  {
    path: 'social-questions',
    loadChildren: () => import('./genderPage/gender/social/social-questions/social-questions.module').then( m => m.SocialQuestionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
