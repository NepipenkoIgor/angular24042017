import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductResolverService } from './product/product-resolver.service';
import { OrderComponent } from './order/order.component';
import { OrderGuardService } from './order/order-guard.service';
import { CdComponent } from './cd/cd.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: 'app/products/products.module#ProductsModule'
  },
  {
    path: 'info',
    loadChildren: 'app/info/info.module#InfoModule'
  },
  {
    path: 'order',
    loadChildren: 'app/order/order.module#OrderModule'
  },
  {
    path: 'cd',
    component: CdComponent
  },
  {
    path: '**',
    redirectTo: 'info',
    pathMatch: 'full'
  }
];