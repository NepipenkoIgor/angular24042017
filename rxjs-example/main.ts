import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
//let input: HTMLInputElement = document.querySelector('.search') as HTMLInputElement;
// function eventSequence<T>(element: HTMLInputElement, eventName: string): Promise<T> {
//   return new Promise((res, rej) => {
//     element.addEventListener(eventName, () => {
//       res((event.target as HTMLInputElement).value);
//     });
//   });
// }
// eventSequence<string>(input, 'input')
//   .then(((value: string) => console.log(value)))

// function eventSequence<T>(element: HTMLInputElement, eventName: string): Function {
//   const values: string [] = [];
//
//   function* a(): IterableIterator<string> {
//     while (true) {
//       yield values[0];
//       values.shift();
//     }
//   }
//
//   element.addEventListener(eventName, () => {
//     values.push((event.target as HTMLInputElement).value);
//   });
//
//   return a;
// }
//
// let sequence: IterableIterator<string> = eventSequence<string>(input, 'input')();
// console.log(sequence.next().value);
//
// setTimeout(() => {
//   console.log(sequence.next().value);
//   console.log(sequence.next().value);
//   console.log(sequence.next().value);
//   console.log(sequence.next().value);
//   console.log(sequence.next().value);
// }, 5000)

// const event$: Observable<KeyboardEvent> = Observable.fromEvent(input, 'input');
// event$
//   .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
//   .subscribe((value: string) => console.log(value));
// let sequence: Observable<number> = Observable.interval(1000);
// sequence.subscribe((value: number) => console.log(value));
// setTimeout(() => {
//   // event$
//   //   .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
//   //   .subscribe((value: string) => sequenceconsole.log(`from second ${value}`));
//   sequence.subscribe((value: number) => console.log(`from second ${value}`));
// }, 5000)
// ReacriveX => Iterator+Observer
// const sequence: Observable<number> = Observable.from([1, 2, 3, 4, 5]);
// sequence.subscribe((value: number) => console.log(value));
// const sequence$$: ReplaySubject<number> = new ReplaySubject(Number.POSITIVE_INFINITY);
//
// sequence$$.next(1);
// sequence$$.next(2);
// sequence$$.next(3);
// sequence$$.next(4);
// setTimeout(() => {
//   sequence$$.subscribe((value: number) => console.log(value))
// }, 2000);

let input: HTMLInputElement = document.querySelector('.search') as HTMLInputElement;

Observable.fromEvent(input, 'input')
  .debounceTime(300)
  .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
  .do((searchTerm: string) => {
    console.log(searchTerm);
  })
  .switchMap((searchTerm: string) => {
    return Observable
      .fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
        .then((res: Response) => res.json()));
  })
  .map((repo: any) => repo.items)
  .subscribe((items: any[]) => console.log(items));