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
//import {SimpleHTTPComponent} from "app/http/SimpleHTTPComponent";


@Component({
    selector: "simple-http",
})
@View({
    directives: [NgIf],
    template: `
  <h2>Simple HTTP</h2>
  <button type="button" (click)="sendRequest()">Send Request</button>
  <div *ng-if="loading">loading...</div>
  <pre>{{data | json}}</pre>
`
})
class SimpleHTTPComponent {
    data: Object;
    loading: boolean;

    constructor(public http: Http) {
    }

    sendRequest(): void {
        this.loading = true;

        this.http.request("http://jsonplaceholder.typicode.com/posts/1")
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
        });
    }
}

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