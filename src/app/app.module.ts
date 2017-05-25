import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseRequestOptions, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './products/card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';
import { ProductsService } from './common/services/products.service';

import { DOMAIN, DOMAIN_TOKEN } from '../config';
import { HttpService } from './common/services/http.service';
import { ModalComponent } from './common/components/modal/modal.component';
import { ModalService } from './common/components/modal/modal.service';
import { FullCardComponent } from './products/card/full-card/full-card.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './common/services/cart.service';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ProductsComponent } from './products/products.component';
import { InfoComponent } from './info/info.component';

import {routes} from './routes';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductResolverService } from './product/product-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    TooltipDirective,
    ProductsFilterPipe,
    ModalComponent,
    FullCardComponent,
    CartComponent,
    CartListComponent,
    ProductsComponent,
    InfoComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: ProductsService, // class/string/token
      useClass: ProductsService
    },
    {
      provide: DOMAIN_TOKEN,
      useValue: DOMAIN
    },
    ModalService,
    HttpService,
    BaseRequestOptions,
    CartService,
    ProductResolverService,
    {
      provide: 'DOMAIN',
      useValue: 'http://somestring'
    }
  ],
  entryComponents: [FullCardComponent, CartListComponent],
  bootstrap: [AppComponent]
  // TODO Full-card add to factory arr
})
export class AppModule {
}
