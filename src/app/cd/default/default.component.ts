import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent  {
  @Input()
  public profile: any;
}
