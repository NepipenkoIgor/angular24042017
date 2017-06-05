import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CartService } from '../common/services/cart.service';
@Injectable()
export class OrderGuardService implements CanActivate {

  public constructor(
    private _cartService: CartService,
    private _router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._cartService.cartSequence$
      .switchMap((products: Product[]) => {
      if (products.length) {
        return Observable.of(true);
      }
      this._router.navigate(['']);
      return Observable.of(false);
    });
  }

}
