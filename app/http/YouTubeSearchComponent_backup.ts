/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/http.d.ts" />

/**
 * YouTubeSearchComponent is a tiny app that will autocomplete search YouTube.
 */

import {Component, View, Injectable,
    bind, OnInit, ElementRef, EventEmitter,
    CORE_DIRECTIVES, Inject} from "angular2/angular2";
import {Http, Response} from "angular2/http";
//import * as Rx from "rx";

/*
 This API key may or may not work for you. Your best bet is to issue your own
 API key by following these instructions:
 https://developers.google.com/youtube/registering_an_application#Create_API_Keys

 Here I've used a **server key** and make sure you enable YouTube.

 Note that if you do use this API key, it will only work if the URL in
 your browser is "localhost"
 */
let YOUTUBE_API_KEY: string = "AIzaSyBuAOdWHinidLxMFfLj1ftAvVi0MnyV1Yw";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";
let loadingGif: string = require("images/loading.gif");

class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.id              = obj && obj.id             || null;
        this.title           = obj && obj.title          || null;
        this.description     = obj && obj.description    || null;
        this.thumbnailUrl    = obj && obj.thumbnailUrl   || null;
        this.videoUrl        = obj && obj.videoUrl       || `https://www.youtube.com/watch?v=${this.id}`;
    }
}

/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */

@Injectable()
export class YouTubeService {
    constructor(public http: Http,
                @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string) {
}

search(query: string): Rx.Observable<SearchResult[]> {
    let params: string = [
        `q=${query}`,
        `key=${this.apiKey}`,
        `part=snippet`,
        `type=video`,
        `maxResults=10`
    ].join("&");
    let queryUrl: string = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
        .map((response: Response) => {
            return (<any>response.json()).items.map(item => {
                // console.log("raw item", item); // uncomment if you want to debug
                return new SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
}
}

export var youTubeServiceInjectables: Array<any> = [
    bind(YouTubeService).toClass(YouTubeService),
    bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
    bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
];


/**
 * SearchBox displays the search box and emits events based on the results
 */


@Component({
    events: ["loading", "results"],
    selector: "search-box"
})
@View({
    template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
class SearchBox implements OnInit {
    loading: EventEmitter = new EventEmitter();
    results: EventEmitter = new EventEmitter();

    constructor(public youtube: YouTubeService,
                private el: ElementRef) {
    }

    //
    // Note:
    // The (<any>Rx) syntax below is a temporary hack to disable type checking
    // because the Typescript definition files bundled with angular for rx don't
    // include `fromEvent`. See:
    // http://stackoverflow.com/questions/23217334/how-do-i-extend-a-typescript-class-definition-in-a-separate-definition-file
    //
    onInit(): void {
        // convert the `keyup` event into an observable stream
        (<any>Rx).Observable.fromEvent(this.el.nativeElement, "keyup")
            .map((e: any) => e.target.value) // extract the value of the input
            .filter((text: string) => text.length > 1) // filter out if empty
            .debounce(250)                             // only once every 250ms
            .do(() => this.loading.next(true))         // enable loading
            // search, discarding old events if new input comes in
            .flatMapLatest((query: string) => this.youtube.search(query))
            // act on the return of the search
            .subscribe(
            (results: SearchResult[]) => { // on sucesss
                this.loading.next(false);
                this.results.next(results);
            },
            (err: any) => { // on error
                console.log(err);
                this.loading.next(false);
            },
            () => { // on completion
                this.loading.next(false);
            }
        );

    }
}

@Component({
    properties: ["result"],
    selector: "search-result"
})
@View({
    template: `
   <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="{{result.thumbnailUrl}}">
        <div class="caption">
          <h3>{{result.title}}</h3>
          <p>{{result.description}}</p>
          <p><a href="{{result.videoUrl}}"
                class="btn btn-default" role="button">Watch</a></p>
        </div>
      </div>
    </div>
  `
})
export class SearchResultComponent {
    result: SearchResult;
}

@Component({
    selector: "youtube-search"
})
@View({
    directives: [CORE_DIRECTIVES, SearchBox, SearchResultComponent],
    template: `
  <div class='container'>
      <div class="page-header">
        <h1>YouTube Search
          <img
            style="float: right;"
            *ng-if="loading"
            src=${loadingGif} />
        </h1>
      </div>

      <div class="row">
        <div class="input-group input-group-lg col-md-12">
          <search-box
             (loading)="loading = $event"
             (results)="updateResults($event)"
              ></search-box>
        </div>
      </div>

      <div class="row">
        <search-result
          *ng-for="#result of results"
          [result]="result">
        </search-result>
      </div>
  </div>
  `
})
export class YouTubeSearchComponent {
    results: SearchResult[];

    updateResults(results: SearchResult[]): void {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    }
}
