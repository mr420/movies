import { MoviedbProvider } from './../../providers/moviedb/moviedb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  movies: any;
  errorMessage: string;
  imageBaseUrl = 'http://image.tmdb.org/t/p/w185//';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public moviedb: MoviedbProvider) {
  }

  ionViewDidLoad() {
    this.getUpcomingMovies();
    console.log('ionViewDidLoad UpcomingPage');
  }

  getUpcomingMovies() {
    this.moviedb.getUpcomingMovies()
      .subscribe(
      response => {
      this.movies = response.results;
        console.log(this.movies)
      },
      error => this.errorMessage = <any>error
      );
  }

  showDetail(movie) {
    this.navCtrl.push('DetailsPage', { details: movie });
  }

  gotoSettings() {
    this.navCtrl.push('SettingsPage');
  }

}
