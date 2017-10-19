import { DirectivesModule } from './../../directives/directives.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularPage } from './popular';

@NgModule({
  declarations: [
    PopularPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(PopularPage),
    ComponentsModule
  ],
})
export class PopularPageModule {}
