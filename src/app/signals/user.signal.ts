import { computed, effect, signal } from '@angular/core';

export interface User {
    login: string;
    password: string;
}

export const user = signal<User | null>(null);

export const isLogged = computed(() => !!user());

effect(() => console.log(!!user()));
