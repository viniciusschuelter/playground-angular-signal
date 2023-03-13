import {Observable} from "rxjs";
import {computed, signal, Signal} from "@angular/core";


export function fromObservable<T, U>(source: Observable<T>, initialValue: U): Signal<T|U> {
  const state = signal<any>(initialValue);

  source.subscribe({
    next: value => state.set(value),
    error: error => state.set({error: error}),
  });

  return computed(() => {
    const current = state();
    if (current.error) throw current.error
    return current;
  });
}
