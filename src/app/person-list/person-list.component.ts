import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people = [
    {
      'name': 'Casper Witting',
      'age': 22,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum magni modi mollitia nihil repudiandae sint veritatis. A architecto cupiditate dolorum, fugit illo impedit laudantium magni maiores neque nobis quos?',
      'country': 'Nederland'
    },
    {
      'name': 'Carmen Huibers',
      'age': 22,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum magni modi mollitia nihil repudiandae sint veritatis. A architecto cupiditate dolorum, fugit illo impedit laudantium magni maiores neque nobis quos?',
      'country': 'Belgiê'
    },
    {
      'name': 'Niels Witting',
      'age': 20,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum magni modi mollitia nihil repudiandae sint veritatis. A architecto cupiditate dolorum, fugit illo impedit laudantium magni maiores neque nobis quos?',
      'country': 'China'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
