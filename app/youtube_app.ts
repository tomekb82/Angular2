/// <reference path="../typings/angular2/angular2.d.ts" />

/*
 * Angular
 */
import {Component, bootstrap, View, NgIf} from "angular2/angular2";
import {HTTP_BINDINGS} from 'angular2/http';
import {Http, Response} from "angular2/http";

/*
 * Components
 */
import {YouTubeSearchComponent} from "app/http/YouTubeSearchComponent";

import {youTubeServiceInjectables} from "app/http/YouTubeSearchComponent";
//import {utilInjectables} from "util/util";

@Component({
    selector: "youtube-app"
})
@View({
    directives: [YouTubeSearchComponent],
    template: `
  <div class="container">
<youtube-search></youtube-search>
  </div>
  `
})
class YoutubeApp {

}

bootstrap(YoutubeApp, [HTTP_BINDINGS,youTubeServiceInjectables/*, utilInjectables*/]);