import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'course-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public formModel: FormGroup;

  public formArrayModel: FormGroup = new FormGroup({
    emails: new FormArray([new FormControl('')])
  })

  public constructor(
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formModel = this._fb.group({
      firstName: ['Ola', [Validators.required, Validators.minLength(4), this.nameValidator]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        pconfirm: ['', [Validators.required, Validators.minLength(4)]]
      }, {
        asyncValidator: this.asyncEqualValidator
      })
    });
  }

  public submit(values: any): void {
    console.log(values)
  }

  public addEmail(): void {
    (this.formArrayModel.get('emails') as FormArray).push(new FormControl());
  }

  public nameValidator(control: FormControl): { [key: string]: boolean } {
    const value: string = control.value || '';
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return (valid ? null : { nospecial: true })
    //  .delay(5000);
  }

  public asyncEqualValidator({ value }: FormGroup): Observable<{ [key: string]: boolean }> {
    const [first, ...rest] = Object.keys(value || {});
    const valid: boolean = rest.every((v: string) => value[v] === value[first]);
    return Observable.of(valid ? null : { equal: true })
      .delay(5000);
  }

}
