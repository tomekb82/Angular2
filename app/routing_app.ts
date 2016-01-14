/// <reference path="../typings/angular2/angular2.d.ts" />

/*
 * Angular
 */
import {provide, Component, bootstrap, View} from "angular2/angular2";
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';

/*
 * Components
 */
import {HomeComponent} from "app/routing/HomeComponent";
import {ContactComponent} from "app/routing/ContactComponent";
import {AboutComponent} from "app/routing/AboutComponent";


@Component({
    selector: "route-app"
})
@View({
    directives: [ROUTER_DIRECTIVES],
   template: `

   <div class="grayColor"><a [router-link]="['/Home']">Home</a>
        <a [router-link]="['/AboutUs']">About Us</a>
        <a [router-link]="['/ContactUs']">Contact Us</a>

    </div><hr>

    <router-outlet></router-outlet>
  `
})

@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/aboutus', component: AboutComponent, as: 'AboutUs'  },
    {path: '/contactus', component: ContactComponent, as: 'ContactUs'  }
])

class RouteApp {

}

bootstrap(RouteApp, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

