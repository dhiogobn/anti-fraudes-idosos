import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialQuestionsPageRoutingModule } from './social-questions-routing.module';

import { SocialQuestionsPage } from './social-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialQuestionsPageRoutingModule
  ],
  declarations: [SocialQuestionsPage]
})
export class SocialQuestionsPageModule {}
