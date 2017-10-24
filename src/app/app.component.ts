import { LocalStorageProvider } from './../providers/local-storage/local-storage';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'SplashScreenPage';

  constructor(platform: Platform,
    private translate: TranslateService,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private storage: LocalStorageProvider) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.getPreferences();
      //this.getEmail();
      //this.setEmail();
      //this.removeEmail();
    });
  }

  getPreferences() {
    this.storage.getLanguage().then(language => {
      console.log('language value is ' + language);
      if (language != null) {
        this.translate.use(language);
        console.log('Language changed hindi')
      } else {
        this.translate.use('en');
        console.log("going to else case")
      }
    });
  }

  setEmail() {
    this.storage.setEmail('sandesh@gmail.com');
  }

  getEmail() {
    this.storage.getEmail();
  }

  removeEmail() {
    this.storage.removeEmail();
  }

  clearLocalStorage() {
    this.storage.clearStorage();
  }

}

