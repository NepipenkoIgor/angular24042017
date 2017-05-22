import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { products$ } from './data';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from './common/services/products.service';
import { ModalService } from './common/components/modal/modal.service';
import { FullCardComponent } from './card/full-card/full-card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string = 'ng-course';
  public placeholder: string = 'search term';
  public width: number = 50;
  public searchTerm: string;
  public logo: string = 'assets/images/logo.png';

  public products$: Observable<Product[]>;

  public constructor(
    private _productsService: ProductsService,
    private _modalService: ModalService,
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
  }

  public onSearch(value: string): void {
    this.searchTerm = value;
  }

  // TODO Add modal open method

  public openCard(product: Product): void {
    this._modalService.open({
      component: FullCardComponent,
      context: {
        product
      }
    });
  }
}
