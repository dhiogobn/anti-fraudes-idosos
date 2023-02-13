import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankQuestionPageRoutingModule } from './bank-question-routing.module';

import { BankQuestionPage } from './bank-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankQuestionPageRoutingModule
  ],
  declarations: [BankQuestionPage]
})
export class BankQuestionPageModule {}
