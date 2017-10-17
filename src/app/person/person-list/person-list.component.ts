import { Component, OnInit } from '@angular/core';
import {Person} from "./person.model";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people = [];


  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.people = this.personService.getPeople();
  }

}
