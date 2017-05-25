import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { InfoComponent } from './info/info.component';
import { ProductComponent } from './product/product.component';
import { ProductResolverService } from './product/product-resolver.service';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: ProductComponent,
        data: {
          title: 'Product stats'
        },
        resolve: {
          product: ProductResolverService
        }
      }
    ]
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: '**',
    redirectTo: 'info',
    pathMatch: 'full'
  }
];