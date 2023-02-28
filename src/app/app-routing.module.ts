import { WalletPage } from './home/walletPage/wallet/wallet.page';
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
    path: 'registry',
    component: UserPage
  },
  {
    path: 'user/:id/gender',
    component: GenderPage

  },
  {
    path: 'user/:id/gender/bank',
    component: BankQuestionPage
  },
  {
    path: 'user/:id/gender/internet',
    component: InternetQuestionPage
  },
  {
    path: 'user/:id/gender/password',
    component: PasswordsQuestionsPage
  },
  {
    path: 'user/:id/gender/social',
    component: SocialQuestionsPage
  },
  {
    path: 'user/:id/wallet',
    component: WalletPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
