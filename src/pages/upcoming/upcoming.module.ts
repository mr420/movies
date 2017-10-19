import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingPage } from './upcoming';

@NgModule({
  declarations: [
    UpcomingPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingPage),
    ComponentsModule
  ],
})
export class UpcomingPageModule {}
