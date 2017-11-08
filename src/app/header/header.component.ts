import { Component, OnInit } from '@angular/core';
import {Router, NavigationStart} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show:boolean = false;

  constructor(router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.show = false;
      }
  });
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.show = !this.show
  }

}
