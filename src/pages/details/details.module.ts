import { DirectivesModule } from './../../directives/directives.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(DetailsPage),
  ],
})
export class DetailsPageModule {}
