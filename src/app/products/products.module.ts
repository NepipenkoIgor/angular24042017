import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';
import { ProductResolverService } from '../product/product-resolver.service';
import { ProductsService } from '../common/services/products.service';
import { CardComponent } from './card/card.component';
import { TooltipDirective } from '../common/directives/tooltip.directive';
import { ProductsFilterPipe } from '../common/pipes/products-filter.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
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
      }
    ])
  ],
  providers: [ProductResolverService, ProductsService],
  declarations: [
    ProductsComponent,
    ProductComponent,
    CardComponent,
    TooltipDirective,
    ProductsFilterPipe
  ]
})
export class ProductsModule {
}
