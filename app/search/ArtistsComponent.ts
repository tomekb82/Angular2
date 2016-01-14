/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from "angular2/angular2";

import {RouteParams} from 'angular2/router';

@Component({
    selector: 'artists'
})
@View({
    template: `
  <h1> Artists ! </h1>
  `
})

export class ArtistsComponent{

    id:string;

    constructor(private routeParams: RouteParams){
        this.id = routeParams.get("id");
    }
}