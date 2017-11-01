import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: {id: number, full_name: string, description: string, age: number, country: string, avatar: string};


  constructor(private personService: PersonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.person = {
    //   id: this.route.snapshot.params['id']
    // };
    const id = +this.route.snapshot.params['id'];
    this.person = this.personService.getPerson(id);
  }
}
