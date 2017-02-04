import { DataService } from './../data.service';
import { Input, Output, Component, EventEmitter, OnInit, OnChanges, DoCheck } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  item: any

  @Output()
  delete = new EventEmitter<any>();

  constructor(private datasvc: DataService) {  }

  ngOnInit() {
  }

  ngOnChanges() {}
  ngDoCheck () {}

  deleteMe(item) {
    // this.delete.emit(item);
    this.datasvc.deleteArticle(item);
  }
}
