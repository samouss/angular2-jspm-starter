// Import CSS via SystemJS plugin CSS
import 'bootstrap/css/bootstrap.min.css!';

// Import peer dependency
import 'rxjs/add/operator/map';

// Import Angular 2 modules
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

import StarterComponent from './app/starter/starter.component';

bootstrap(StarterComponent, [HTTP_PROVIDERS]);
