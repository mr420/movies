import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalStorageProvider } from './../../providers/local-storage/local-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  language: string = 'en';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translateService: TranslateService,
    private storage: LocalStorageProvider) {
    this.initSettings();
  }

  ionViewDidLoad() {

  }

  initSettings() {
    this.storage.getLanguage().then(
      language => {
        if (language) {
          this.language = language;
        }
      }
    );
  }

  changeLanguage() {
    console.log('ionViewDidLoad SettingsPage');
    this.translateService.use(this.language);
    this.storage.setLanguage(this.language);
  }

}
