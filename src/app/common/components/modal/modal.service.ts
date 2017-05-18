import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalService {

  private _modalSequence$$: Subject<any> = new Subject();

  public open(componentObj: { component: any, context: any }): void {
    this._modalSequence$$.next(componentObj);
  }

  public close(): void {
    this._modalSequence$$.next(null)
  }

  public get modalSequence$(): Observable<any> {
    return this._modalSequence$$.asObservable();
  }

}
