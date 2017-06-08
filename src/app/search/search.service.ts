import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  private _searchSequnce$$: Subject<string> = new Subject();

  public get getSearchTerm$(): Observable<string> {
    return this._searchSequnce$$.asObservable();
  }

  public set searchTerm(text: string) {
    this._searchSequnce$$.next(text);
  }

}
