import { computed, effect, signal } from '@angular/core';

export interface User {
    login: string;
    password: string;
}

export const user = signal<User | null>(JSON.parse(localStorage.getItem('user') as any));

export const isLogged = computed(() => {
  // !user() && !location.href.includes('login') && location.assign('/login');
  return !!user();
});

effect(() => console.log(user()));
