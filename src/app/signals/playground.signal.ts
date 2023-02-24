import {computed, effect, signal} from "@angular/core";


export const counter = signal(0);

export const count = computed(() => counter())

effect(() => console.log('The counter is:', counter()));

export const evenOrOdd = computed(() => counter() % 2 === 0 ? 'even' : 'odd');

effect(() => console.log('This number is: ' + (counter() % 2 === 0 ? 'even' : 'odd')));

export const doubleCount = computed(() => counter() * 2);

effect(() => console.log('The double is: ' + counter() * 2));
