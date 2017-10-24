import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingPage } from './upcoming';

@NgModule({
  declarations: [
    UpcomingPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(UpcomingPage),
    ComponentsModule
  ],
})
export class UpcomingPageModule {}
