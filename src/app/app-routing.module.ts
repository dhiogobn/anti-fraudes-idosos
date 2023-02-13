import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BankQuestionPage } from './home/genderPage/gender/bank/bank-question/bank-question.page';
import { GenderPage } from './home/genderPage/gender/gender.page';
import { InternetQuestionPage } from './home/genderPage/gender/internet/internet-question/internet-question.page';
import { PasswordsQuestionsPage } from './home/genderPage/gender/passwords/passwords-questions/passwords-questions.page';
import { SocialQuestionsPage } from './home/genderPage/gender/social/social-questions/social-questions.page';
import { UserPage } from './home/userPage/user/user.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserPage
  },
  {
    path: 'gender',
    component: GenderPage

  },
  {
    path: 'gender/bank',
    component: BankQuestionPage
  },
  {
    path: 'gender/internet',
    component: InternetQuestionPage
  },
  {
    path: 'gender/password',
    component: PasswordsQuestionsPage
  },
  {
    path: 'gender/social',
    component: SocialQuestionsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
