/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/http.d.ts" />


/*
 * Angular
 */
import {Component, View, NgIf} from "angular2/angular2";
import {Http, Response} from "angular2/http";

@Component({
  selector: "simple-http"
})
@View({
  //directives: [NgIf],
  template: `
  <h2>Simple HTTP</h2>
  <!--<button type="button" (click)="sendRequest()">Send Request</button>
  <div *ng-if="loading">loading...</div>-->
  <pre>{{data | json}}</pre>
`
})
export class SimpleHTTPComponent {
  data: Object;
  loading: boolean;

  constructor(public http: Http) {
  }

  sendRequest(): void {
    /*this.loading = true;
    this.http.request("http://jsonplaceholder.typicode.com/posts/1")
      .toRx()
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });*/
  }
}

