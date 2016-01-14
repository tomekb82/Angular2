/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, OnInit, Inject} from "angular2/angular2";

import {RouteParams} from 'angular2/router';

import { SpotifyService} from "app/search/SearchComponent";

@Component({
    selector: 'tracks',
    providers: [SpotifyService]
})
@View({
    template: `
  <h1> Tracks ! </h1>
  `
})

export class TracksComponent  implements OnInit{

    id:string;
    results: Object;
   // spotify: SpotifyService;
    onInit(): void{

        this.results = this.spotify.getTrack(this.id);
        console.log("id="+this.id + ", res = " + this.results);
    }

    constructor(public spotify: SpotifyService, private routeParams: RouteParams){
        this.id = routeParams.get("id");
        //this.spotify = spotify;
        console.log("id="+this.id);
    }
}