import { Component, OnDestroy, OnInit } from '@angular/core';
import { FullCardComponent } from './card/full-card/full-card.component';
import { ModalService } from '../common/components/modal/modal.service';
import { ProductsService } from '../common/services/products.service';
import { Observable } from 'rxjs/Observable';
import { SearchService } from '../search/search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products$: Observable<Product[]>;
  public searchTerm: string;
  private _searchTermSubcribtion: Subscription;

  public constructor(
    private _productsService: ProductsService,
    private _modalService: ModalService,
    private _searchService: SearchService
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
    this._searchTermSubcribtion = this._searchService.getSearchTerm$.subscribe((text: string) => {
      this.searchTerm = text;
    });
  }

  public onSearch(value: string): void {
    this.searchTerm = value;
  }

  public openCard(product: Product): void {
    this._modalService.open({
      component: FullCardComponent,
      context: {
        product
      }
    });
  }

  public ngOnDestroy(): void {
    this._modalService.close();
    this._searchTermSubcribtion.unsubscribe();
  }
}
