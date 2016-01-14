/// <reference path="../typings/angular2/angular2.d.ts" />

/*
 * Angular
 */
import {provide, Component, bootstrap, View} from "angular2/angular2";
import {HTTP_PROVIDERS} from 'angular2/http';
import {HTTP_BINDINGS} from 'angular2/http';
import {Http, Response} from "angular2/http";

import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';

/*
 * Components
 */
import {SearchComponent} from "app/search/SearchComponent";
import {ArtistsComponent} from "app/search/ArtistsComponent";
import {TracksComponent} from "app/search/TracksComponent";
import {AlbumsComponent} from "app/search/AlbumsComponent";

@Component({
    selector: "search-app"
})
@View({
    directives: [ROUTER_DIRECTIVES],
   template: `
    <hr>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([
    {path: '/',        redirectTo: '/search'},
    {path: '/search', component: SearchComponent, as: 'Search'  },
    {path: '/artists/:id', component: ArtistsComponent, as: 'Artists'  },
    {path: '/tracks/:id', component: TracksComponent, as: 'Tracks'  },
    {path: '/albums/:id', component: AlbumsComponent, as: 'Albums'  }
])

class SearchApp {

}

bootstrap(SearchApp, [ROUTER_PROVIDERS, HTTP_BINDINGS/*, spotifyServiceInjectables*/   ,  provide(LocationStrategy, {useClass: HashLocationStrategy})]);

