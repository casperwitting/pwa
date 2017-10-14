import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() age: number;
  @Input() country: string;

  constructor() { }

  ngOnInit() {
  }

}
