import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: [ './alert.component.css' ]
} )
export class AlertComponent implements OnInit {

    errorStatus: string = 'danger';
    errorCode: number = 400;
    errorMessage: string = '';
    errorMessageCreated = false;
    alerts = [ 'success', 'danger' ]

    constructor() {
        this.errorStatus = Math.random() > 0.5 ? 'success' : 'danger';
    }

    ngOnInit() {
    }

    onUpdateErrorStatus( status ) {
        this.errorStatus = status;
        this.errorMessageCreated = true;
        this.alerts.push( this.errorStatus );
    }

    onUpdateErrorMessage( event: any ) {
        this.errorMessage = (<HTMLInputElement>event.target).value;
    }
}
