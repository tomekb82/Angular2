/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from "angular2/angular2";

import {LoginComponent} from "app/auth/LoginComponent";

@Component({
    selector: 'home'
})
@View({
    directives: [LoginComponent],
    template: `
  <h1> Welcome! </h1>

  <login></login>
  `
})

export class HomeComponent{

}