import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MoviedbProvider {

  private baseUrl = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '219989fe3b6481db228b9879d7d05ca9';
  private topRatedUrl = 'top_rated?api_key=';
  private popularUrl = 'popular?api_key=';
  private upcomingUrl = 'upcoming?api_key=';

  constructor(public http: HttpClient) {
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(this.baseUrl + this.topRatedUrl + this.apiKey)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(this.baseUrl + this.popularUrl + this.apiKey)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(this.baseUrl + this.upcomingUrl + this.apiKey)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
