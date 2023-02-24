import { computed, effect, signal } from '@angular/core';

export enum ThemeEnum {
    light = 'light',
    dark = 'dark'
}

export const theme = signal<ThemeEnum>(ThemeEnum.dark);

export const currTheme = computed(() => {
  document.documentElement.setAttribute('data-theme', theme())
  return theme()
});

effect(() => console.log('Current theme is: ' + theme()));
