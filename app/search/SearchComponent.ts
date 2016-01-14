/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/http.d.ts" />

import {Component, View, OnInit, NgFor, NgIf, Inject} from "angular2/angular2";

import {Router, RouterLink, RouteParams} from 'angular2/router';

import {HTTP_BINDINGS} from 'angular2/http';
import {Http, Response} from "angular2/http";


class SpotifyService{
    result:Object;
    http:Http;
    constructor(@Inject(Http) http: Http){
       this.http = http;
    }

    searchByTrack(query:string): /*Promise<Response>*/Object{
        let params: string = [
            `q=${query}`,
            `type=track`,
        ].join("&");
        let queryURL:string =  `http://api.spotify.com/v1/search?${params}`;
        //return this.http.get(queryURL).toPromise();
        this.http.get(queryURL)
            .map((res: Response) => res.json())
            .subscribe(res => this.result = res);

        return this.result;
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
                            <p>
                                <audio id="{{t.id}]" controls src="{{t.preview_url}}"></audio>
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
        this.results = this.spotify.searchByTrack(this.query);
        //this.spotify.searchByTrack(this.query).then(this.saveResults/*.bind(this)*/);
    }

    saveResults(res:Response): void {
        this.results = res.join();
        console.log("saveResults, res= " + this.results);
    }

}