/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from "angular2/angular2";

import {RouteParams} from 'angular2/router';

@Component({
    selector: 'tracks'
})
@View({
    template: `
  <h1> Albums ! </h1>
  `
})

export class TracksComponent{

    id:string;

    constructor(private routeParams: RouteParams){
        this.id = routeParams.get("id");
    }
}