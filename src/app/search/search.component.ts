import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  public constructor() { }

  public ngOnInit(): void {
  }

  public search(val: any): void {
    this.onSearch.emit(val);
  }
}
