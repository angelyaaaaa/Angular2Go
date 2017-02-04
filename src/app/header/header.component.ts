import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle = 'Hello Willlll+';
  homeUrl = 'http://blog.miniasp.com/';
  homeAlt = 'The Will Will Web----------';
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  plusOne(e: MouseEvent) {
    console.log(e);
    if(e.ctrlKey) {
      this.count--;
    } else {
      this.count++;
    }
  }

  copyRightWarning(e) {
    alert('this is XXX right');
  }

  highlightClass() {
    return {'highlight': true, 'active': this.count%2 == 0};
  }
}
