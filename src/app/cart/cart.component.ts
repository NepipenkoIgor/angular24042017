import { Component, OnInit } from '@angular/core';
import { CartService } from '../common/services/cart.service';
import { products$ } from '../data/index';

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: Product[];

  public constructor(
    private _cartService: CartService
  ) { }

  public ngOnInit(): void {
    this._cartService.cartSequence$
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

}
