import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaseRequestOptions, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';
import { ProductsService } from './common/services/products.service';

import { DOMAIN, DOMAIN_TOKEN } from '../config';
import { HttpService } from './common/services/http.service';
import { ModalComponent } from './common/components/modal/modal.component';
import { ModalService } from './common/components/modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    TooltipDirective,
    ProductsFilterPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule
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
    {
      provide: 'DOMAIN',
      useValue: 'http://somestring'
    }
  ],
  bootstrap: [AppComponent]
  // TODO Full-card add to factory arr
})
export class AppModule {
}
