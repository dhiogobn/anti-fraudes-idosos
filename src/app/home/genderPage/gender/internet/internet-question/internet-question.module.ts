import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternetQuestionPageRoutingModule } from './internet-question-routing.module';

import { InternetQuestionPage } from './internet-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternetQuestionPageRoutingModule
  ],
  declarations: [InternetQuestionPage]
})
export class InternetQuestionPageModule {}
