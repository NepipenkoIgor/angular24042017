import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../common/services/cart.service';
import { ModalService } from '../../../common/components/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'course-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.css']
})
export class FullCardComponent {

  public constructor(
    private _cartService: CartService,
    private _modalService: ModalService,
    private _router: Router,
  ) {

  }

  public buy(cartItem: CartItem): void {
    this._cartService.updateCart = cartItem;
    this._modalService.close();
  }

  public goToProduct(product: Product): void {
    this._router.navigate(['products', product._id]);
  }
}
