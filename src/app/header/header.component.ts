import {
  Component, OnInit, ViewChild, TemplateRef, ContentChild, ViewContainerRef,
  AfterViewInit, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterContentInit(): void {

  }
}
