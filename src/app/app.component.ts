import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { products$ } from './data';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from './common/services/products.service';
import { ModalService } from './common/components/modal/modal.service';
import { FullCardComponent } from './products/card/full-card/full-card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  public title: string = 'ng-course';
  public placeholder: string = 'search term';
  public width: number = 50;
  public logo: string = 'assets/images/logo.png';

}
