import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export default class GistService {

  /**
   * @name API_ENDPOINT
   * @desc Endpoit for Github API
   * @type {string}
   */
  API_ENDPOINT: string = 'https://api.github.com';

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
      .get(this.buildURL('/gists'))
      .map((res) => res.json());
  }

  /**
   * @name   buildURL
   * @param  {string} url
   * @return {string}
   */
  private buildURL(url: string): string {
    return this.API_ENDPOINT + url;
  }

}
