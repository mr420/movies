import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
@NgModule({
	declarations: [LoaderComponent],
	imports: [ IonicModule],
	exports: [LoaderComponent]
})
export class ComponentsModule {}
