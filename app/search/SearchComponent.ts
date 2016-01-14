/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/http.d.ts" />

import {Component, View, OnInit, NgFor, NgIf, Inject, Injectable, bind} from "angular2/angular2";

import {Router, RouterLink, RouteParams} from 'angular2/router';

import {HTTP_BINDINGS} from 'angular2/http';
import {Http, Response} from "angular2/http";

let SPOTIFY_BASE_URL: string = "http://api.spotify.com/v1";

class SpotifyService{
    result:Object;
    http:Http;
    constructor(@Inject(Http) http: Http){
       this.http = http;
    }

    query(URL: string, params?: Array<string>) : Object{
        let queryURL:string =  `${SPOTIFY_BASE_URL}${URL}`;
        if(params){
            queryURL = `${queryURL}?${params.join("&")}`;
        }
        console.log(queryURL);
        this.http.get(queryURL)
            .map((res: Response) => res.json())
            .subscribe(res => this.result = res);

        console.log(this.result);
        return this.result;
    }
    query2(URL: string, params?: Array<string>): Promise<Response>{
        let queryURL:string =  `${SPOTIFY_BASE_URL}${URL}`;
        if(params){
            queryURL = `${queryURL}?${params.join("&")}`;
        }
        console.log(queryURL);
        return this.http.get(queryURL).toPromise();
    }

    search(query:string, type:string): Object{
        return this.query(`/search`,[
            `q=${query}`,
            `type=${type}`,
        ]);
    }
    searchTrack(query:string): Object{
        return this.search(query, "track");
    }
    getTrack(id:string) : Promise<Response>{
        return this.query2(`/tracks/${id}`);
    }
}

@Component({
    selector: 'search',
    providers: [SpotifyService]
})
@View({
    directives: [NgIf, NgFor, RouterLink],
    template: `
        <p>
            <h1> Search</h1>
        </p>
        <p>
            <input type="text" #newquery [value]="query" (keydown.enter)="submit(newquery.value)">
            <button (click)="submit(newquery.value)">Search</button>
        </p>

        <p>
            <div *ng-if="results">
                <h1>Results</h1>

                <div class="row">
                    <div class="col-sm-6 col-md-4" *ng-for="#t of results.tracks.items">
                        <div class="thumbnail">
                            <div class="content">
                                <img src="{{ t.album.images[0].url}}" class="img-responsive">
                            </div>
                        </div>
                        <div class="caption">
                            <h3>
                                <a [router-link]="['/Artists', {id: t.artists[0].id}]">
                                    {{t.artists[0].name}}
                                </a>
                            </h3>
                            <br>
                            <p>
                                <a [router-link]="['/Tracks', {id: t.id}]">
                                    {{t.name}}
                                </a>
                            </p>
                         
                        </div>
                        <div class="attribution">
                            <h4>
                                <a [router-link]="['/Albums', {id: t.album.id}]">
                                    {{t.album.name}}
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>

            </div>
        </p>
  `
})

export class SearchComponent implements OnInit{

    query:string;
    results: Object;

    constructor(public spotify: SpotifyService,
                public router:Router,
                public routeParams:RouteParams){
    }

    onInit(): void{
        this.search();
    }

    submit(query:string): void{
        this.router.navigate(["/Search", {query: query}]);
        this.search();
    }

    search(): void{
        this.query = this.routeParams.get("query");
        if(!this.query){
            return
        }
        this.results = this.spotify.searchTrack(this.query);
        //this.spotify.searchByTrack(this.query).then(this.saveResults/*.bind(this)*/);
    }

    saveResults(res:Response): void {
        this.results = res.join();
        console.log("saveResults, res= " + this.results);
    }

}


@Component({
    selector: 'tracks',
    providers: [SpotifyService]
})
@View({
    template: `
  <h1> {{results.artists[0].name}} </h1>

           <div class="row">
                    <div class="col-sm-6 col-md-4">
                    <div class="caption">
                            <h3>
                            {{results.album.name}}

                            </h3>

                        </div>
                        <div class="thumbnail">
                            <div class="content">
                                <img src="{{ results.album.images[0].url}}" class="img-responsive">
                            </div>
                        </div>
                         <div class="attribution">
                            <h4>

{{results.name}}
                            </h4>
                        </div>
                        <div class="caption">

                            <p>
                                <audio controls src="{{results.preview_url}}"></audio>
                            </p>
                        </div>

                    </div>
                </div>
  `
})
export class TracksComponent  implements OnInit{

    id:string;
    results: Object;
    onInit(): void{
        this.search();
    }

    search(): void{
        this.spotify.getTrack(this.id).then(this.saveResults.bind(this));
    }

    saveResults(res:Response): void {
        this.results = res.json();
    }

    constructor(public spotify: SpotifyService,
                private routeParams: RouteParams){
        this.id = routeParams.get("id");
    }
}