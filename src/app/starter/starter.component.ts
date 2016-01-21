import { Component } from 'angular2/core';
import GistService from '../services/gist.service';

@Component({
  selector: 'starter',
  providers: [GistService],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h2>{{ name }}</h2>
        <button (click)="getGistsAuthor()" class="btn btn-info">Click and see the console !</button>
      </div>
      <div class="jumbotron">
        <ul>
          <li *ngFor="#author of gistsAuthor">{{ author }}</li>
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
  name: string = 'Github Gists';

  /**
   * @name gistsAuthor
   * @type {Array<string>}
   */
  gistsAuthor: Array<string> = [];

  /**
   * @constructor
   * @param  {GistService} _GistService
   */
  constructor(private _GistService: GistService) {}

  /**
   * @name   getGists
   * @return {void}
   */
  getGistsAuthor(): void {
    this._GistService.getGists()
      .map((res: any) => {
        return res
          .filter((res: any) => res.owner)
          .map((res: any) => res.owner.login);
      })
      .subscribe((res: any) => {
        this.gistsAuthor = res;
      });
  }

}
