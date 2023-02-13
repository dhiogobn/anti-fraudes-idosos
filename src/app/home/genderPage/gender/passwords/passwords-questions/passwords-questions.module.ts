import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordsQuestionsPageRoutingModule } from './passwords-questions-routing.module';

import { PasswordsQuestionsPage } from './passwords-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordsQuestionsPageRoutingModule
  ],
  declarations: [PasswordsQuestionsPage]
})
export class PasswordsQuestionsPageModule {}
