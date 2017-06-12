import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderGuardService } from './order-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { SwitcherComponent } from './switcher/switcher.component';


function nameValidator(control: FormControl): { [key: string]: boolean } {
  const value: string = control.value || '';
  const valid: boolean = /^[a-zA-Z]*$/.test(value);
  return (valid ? null : { nospecial: true });
  //  .delay(5000);
}
@Directive({
  selector: '[nameValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: nameValidator,
      multi: true
    }
  ]
})
export class NameValidator {

}

function asyncEqualValidator({ value }: FormGroup): Observable<{ [key: string]: boolean }> {
  const [first, ...rest] = Object.keys(value || {});
  const valid: boolean = rest.every((v: string) => value[v] === value[first]);
  return Observable.of(valid ? null : { equal: true })
    .delay(5000);
}
@Directive({
  selector: '[asyncequal][ngModelGroup]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: asyncEqualValidator,
      multi: true
    }
  ]
})
export class AsyncEqualValidator {

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent,
        // canActivate: [OrderGuardService]
      }
    ])
  ],
  providers: [OrderGuardService],
  declarations: [
    OrderComponent, AsyncEqualValidator,
    NameValidator,
    SwitcherComponent
  ]
})
export class OrderModule {
}
