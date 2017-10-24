import { MoviedbProvider } from './../../providers/moviedb/moviedb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {

  movies: any;
  errorMessage: string;
  imageBaseUrl = 'http://image.tmdb.org/t/p/w185//';
  pageCount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public moviedb: MoviedbProvider) {
  }

  ionViewDidLoad() {
    this.getTopRatedMovies(this.pageCount);
    console.log('ionViewDidLoad TopRatedPage');
  }

  getTopRatedMovies(pageCount) {
    this.moviedb.getTopRatedMovies(pageCount)
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

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      this.getTopRatedMovies(this.pageCount++);
    })
  }
}
