import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export default class GistService {

  /**
   * @constructor
   * @param  {Http} _http
   */
  constructor(private _http: Http) {}

  /**
   * @name   getGists
   * @return {Observable<any>}
   */
  getGists(): Observable<any> {
    return this._http
      .get('https://api.github.com/gists')
      .map((res) => res.json());
  }

}
