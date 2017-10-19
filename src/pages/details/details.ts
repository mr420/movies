import { Component } from '@angular/core';
import { Toast } from "@ionic-native/toast";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  imageBaseUrl = 'http://image.tmdb.org/t/p/w185//';
  movie: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: Toast) {
    this.movie = navParams.get('details');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  addToFavourite() {
    this.toast.show('Added to favourite list', '2000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

  openFireChat() {
  }
}
