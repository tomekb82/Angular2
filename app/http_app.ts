/// <reference path="../typings/angular2/angular2.d.ts" />

/*
 * Angular
 */
import {Component, bootstrap, View, NgIf, Observable} from "angular2/angular2";
import {HTTP_BINDINGS} from 'angular2/http';
import {Http, Response} from "angular2/http";

/*
 * Components
 */
import {SimpleHTTPComponent} from "app/http/SimpleHTTPComponent";

@Component({
    selector: "http-app"
})
@View({
    directives: [SimpleHTTPComponent],
    template: `
  <div class="container">
  <simple-http></simple-http>
    <hr/>
  </div>
  `
})
class HttpApp {

}

bootstrap(HttpApp, [HTTP_BINDINGS]);