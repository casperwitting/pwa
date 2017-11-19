import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router'
import { PushNotificationsService } from "ng-push";
import { GlobalService } from "../global.service";

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {
    showMenu: boolean = false;

    constructor( router: Router,
                 private _pushNotifications: PushNotificationsService,
                 public globalService: GlobalService ) {
        router.events.subscribe( event => {
            if ( event instanceof NavigationStart ) {
                this.showMenu = false;
            }
        } );
    }

    ngOnInit() {
    }

    toggleCollapse() {
        this.showMenu = !this.showMenu
    }

    pusher() {
        this._pushNotifications.create( 'CreateShop', {
            body: 'Welkom bij de officiële webshop van Create!',
            icon: 'https://casperwitting.github.io/pwa/assets/create_logo.png',
            // vibrate: [200, 100, 200, 100, 200, 100, 400],
            // tag: 'request'
        } ).subscribe(
            res => console.log( res ),
            err => console.log( err )
        )
    }

}
