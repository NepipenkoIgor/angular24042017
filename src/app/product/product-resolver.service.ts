import { Inject, Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';


import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpService } from '../common/services/http.service';
import { DOMAIN_TOKEN } from '../../config';

@Injectable()
export class ProductResolverService implements Resolve<Product> {

  public constructor(
    @Inject(HttpService) private _http: HttpService,
    @Inject(DOMAIN_TOKEN) private _domain: string,
    private _router: Router
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this._http.get(`${this._domain}/products/${route.params.id}`)
      .map((res: Response) => res.json())
      .catch((err: Error) => {
        this._router.navigate(['products']);
        return Observable.of(null);
      });
  }

}
