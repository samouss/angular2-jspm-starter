import { Component } from 'angular2/core';

@Component({
    selector: 'starter',
    template: `
      <div class="container">
        <div class="jumbotron">
          <h2>{{ name }}</h2>
          <button (click)="log()" class="btn btn-info">Click and see the console !</button>
        </div>
      </div>
    `,
})
export default class AppComponent {

  name: string = 'Angular2 JSPM Starter';

  log(): void {
    console.log('Yeahh !');
  }

}
