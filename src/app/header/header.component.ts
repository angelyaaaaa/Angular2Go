import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle = 'Hello Willlll';
  homeUrl = 'http://blog.miniasp.com/';
  homeAlt = 'The Will Will Web----------';

  constructor() { }

  ngOnInit() {
  }

}
