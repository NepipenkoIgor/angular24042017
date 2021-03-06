import { BrowserModule } from '@angular/platform-browser';
import { Directive, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

import { DOMAIN, DOMAIN_TOKEN } from '../config';
import { HttpService } from './common/services/http.service';
import { ModalComponent } from './common/components/modal/modal.component';
import { ModalService } from './common/components/modal/modal.service';
import { FullCardComponent } from './products/card/full-card/full-card.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './common/services/cart.service';
import { CartListComponent } from './cart/cart-list/cart-list.component';

import { routes } from './routes';
import { MenuComponent } from './menu/menu.component';

import { CustomPreloadStrategy } from './preload-strategy';
import { SearchService } from './search/search.service';
import { CdComponent } from './cd/cd.component';
import { DefaultComponent } from './cd/default/default.component';
import { OnPushComponent } from './cd/on-push/on-push.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ModalComponent,
    FullCardComponent,
    CartComponent,
    CartListComponent,
    MenuComponent,
    CdComponent,
    DefaultComponent,
    OnPushComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadStrategy })
  ],
  providers: [
    {
      provide: DOMAIN_TOKEN,
      useValue: DOMAIN
    },
    ModalService,
    HttpService,
    BaseRequestOptions,
    CartService,
    CustomPreloadStrategy,
    {
      provide: 'DOMAIN',
      useValue: 'http://somestring'
    },
    SearchService
  ],
  entryComponents: [FullCardComponent, CartListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
