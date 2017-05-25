import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { title: string, product: Product }) => {
      console.log(data);
    })
  }

}
