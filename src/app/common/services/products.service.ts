import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { DOMAIN_TOKEN } from '../../../config';
import { HttpService } from './http.service';

export class ProductsService {

  public constructor(
    @Inject(HttpService) private _http: HttpService,
    @Inject(DOMAIN_TOKEN) private _domain: string
  ) { }

  public getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(
      `${this._domain}/products`,
      {
        'Content-Type': 'application/json'
      }
    );

  }

}
