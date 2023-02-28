import { effect, Signal } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

export function fromSignal<T>(signal: Signal<T>): Observable<T> {
  return new Observable((subs: Subscriber<T>) => {
    effect(() => !subs.closed && subs.next(signal()));
  });
}
