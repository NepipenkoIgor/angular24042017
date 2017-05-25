import { Component, OnInit } from '@angular/core';
import { CartService } from '../../common/services/cart.service';

@Component({
  selector: 'course-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  public constructor(
    private _cartService: CartService
  ) { }

  public remove(cartItem: CartItem): void {
    this._cartService.updateCart = cartItem;
  }

  public getTotalSum(products: Product[]): string {
    return products.reduce((totalPrice: number, product: Product) => {
      return totalPrice += Number(product.price);
    }, 0)
      .toFixed(2);
  }

}
