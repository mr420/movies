import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LocalStorageProvider {
  
  language: string;

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello LocalStorageProvider Provider');
  }

  //store the email address
  setEmail(email) {
    this.storage.set('email', email);
  }

  //get the stored email
  getEmail() {
    this.storage.get('email').then(email => {
      console.log('email: ' + email);
    });
  }

  //delete the email address
  removeEmail() {
    this.storage.remove('email').then(() => {
      console.log('email is removed');
    });
  }

  //clear the whole local storage
  clearStorage() {
    this.storage.clear().then(() => {
      console.log('all keys are cleared');
    });
  }

  getLanguage(): any {
    return this.storage.get('language').then(language => {
      console.log('Language:' + language);
      this.language = language;
      console.log('Lang value'+ this.language);
      return this.language;
    });
   
  }

  setLanguage(language) {
    this.storage.set('language', language).then(language => {
      console.log('Language:' + language + 'changed');
    });
  }

}
