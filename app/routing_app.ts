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
import {ProtectedComponent} from "app/routing/ProtectedComponent";

import {AUTH_PROVIDERS} from "app/auth/AuthService";

import {LoginComponent} from "app/auth/LoginComponent";


@Component({
    selector: "route-app"
})
@View({
    directives: [ROUTER_DIRECTIVES, LoginComponent],
   template: `

    <div class="page-header">
        <div class="container">
            <h1> Router sample</h1>
            <div class="navLinks">
                <a [router-link]="['/Home']">Home</a>
                <a [router-link]="['/AboutUs']">About Us</a>
                <a [router-link]="['/ContactUs']">Contact Us</a>
                <a [router-link]="['/Protected']">Protected</a>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container">
        <login></login>

        <hr>

        <router-outlet></router-outlet>
        </div>
    </div>


  `
})

@RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/aboutus', component: AboutComponent, as: 'AboutUs'  },
    {path: '/contactus', component: ContactComponent, as: 'ContactUs'  },
    {path: '/protected', component: ProtectedComponent, as: 'Protected'  }
])

class RouteApp {

}

bootstrap(RouteApp, [ROUTER_PROVIDERS, AUTH_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

