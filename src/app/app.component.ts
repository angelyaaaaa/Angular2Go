import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'div.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword = '';

  data: any;
	constructor(private datasvc: DataService) {
    this.data = datasvc.data;
	}


  doSearch(str) {
    this.keyword = str;
    console.log(this.keyword);
  }


}
