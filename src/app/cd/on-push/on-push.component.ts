import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'course-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  @Input()
  public profile: any;

}
