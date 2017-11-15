import { Component } from '@angular/core';
import { GlobalService } from "./global.service";

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
    title = 'app';

    constructor( private globalService: GlobalService ) {
        window.addEventListener( 'online', () => {
            this.globalService.networkConnection = true;
        } );
        window.addEventListener( 'offline', () => {
            this.globalService.networkConnection = false;
        } );
    }
}
