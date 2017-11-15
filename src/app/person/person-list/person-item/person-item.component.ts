import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from "@angular/router";
import { PersonService } from "../../person.service";

@Component( {
    selector: 'app-person-item',
    templateUrl: './person-item.component.html',
    styleUrls: [ './person-item.component.css' ]
} )
export class PersonItemComponent implements OnInit {
    private person: {};


    constructor( private personService: PersonService,
                 private route: ActivatedRoute ) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.params[ 'id' ];
        this.person = this.personService.getPerson( id );
    }

}
