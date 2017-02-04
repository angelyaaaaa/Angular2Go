import { Component } from '@angular/core';

@Component({
  selector: 'div.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword = '';

  doSearch(str) {
    this.keyword = str;
    console.log(this.keyword);
  }
}
