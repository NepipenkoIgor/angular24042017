import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public placeholder: string;

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  public constructor(
    private _searchService: SearchService
  ) {
  }

  public ngOnInit(): void {
  }

  public search(val: any): void {
    //this.onSearch.emit(val);
    this._searchService.searchTerm = val;
  }
}
