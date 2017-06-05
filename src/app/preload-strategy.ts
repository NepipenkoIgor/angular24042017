import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
/**
 * Created by igornepipenko on 6/5/17.
 */


export class CustomPreloadStrategy implements PreloadingStrategy {
  public preload(route: Route, fn: () => Observable<boolean>): Observable<boolean> {
    return Observable.of(true)
      .delay(5000)
      .switchMap((_: boolean) => fn());
  }

}