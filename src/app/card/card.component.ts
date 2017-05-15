import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  @Input()
  public product: Product;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

}
