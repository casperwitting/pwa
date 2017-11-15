import { Component, OnInit } from '@angular/core';
import { PersonService } from "../person.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Person } from "../person-list/person.model";

@Component( {
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: [ './person-form.component.css' ]
} )
export class PersonFormComponent implements OnInit {
    newPerson: Person;

    constructor( private personService: PersonService,
                 private router: Router ) {
    }


    ngOnInit() {
    }

    onSavePerson( person: Person ) {
        this.personService.addPerson( person );
        this.router.navigate( [ '/people' ] );
    }
}
