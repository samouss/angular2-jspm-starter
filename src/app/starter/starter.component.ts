import { Component } from 'angular2/core';
import GistService from '../services/gist.service';

@Component({
  selector: 'starter',
  providers: [GistService],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h2>{{ name }}</h2>
        <button (click)="getGistsAuthors()" class="btn btn-info">Click for load 10 last gists authors !</button>
      </div>
      <div *ngIf="gistsAuthors.length" class="jumbotron">
        <ul>
          <li *ngFor="#author of gistsAuthors">{{ author }}</li>
        </ul>
      </div>
    </div>
  `,
})
export default class StarterComponent {

  /**
   * @name name
   * @type {string}
   */
  name: string = 'Github Gists Authors';

  /**
   * @name gistsAuthors
   * @type {Array<string>}
   */
  gistsAuthors: Array<string> = [];

  /**
   * @constructor
   * @param  {GistService} _GistService
   */
  constructor(private _GistService: GistService) {}

  /**
   * @name   getGists
   * @return {void}
   */
  getGistsAuthors(): void {
    this._GistService.getGists()
      .map((res: any) => {
        return res
          .filter((res: any) => res.owner)
          .map((res: any) => res.owner.login);
      })
      .subscribe((res: any) => {
        this.gistsAuthors = this.gistsAuthors.concat(res);
      });
  }

}
