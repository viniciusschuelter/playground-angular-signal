import { computed, effect, signal } from '@angular/core';

export enum ThemeEnum {
    light = 'light',
    dark = 'dark',
}

export const theme = signal<ThemeEnum>(ThemeEnum.dark);

export const currTheme = computed(() => {
    document.documentElement.setAttribute('data-theme', theme());
    return theme();
});

effect(() => console.log('Current theme is: ' + theme()));

export interface ThemeColorIcon {
    bgColor: string;
    iconColor: string;
}

export const themeColorsDark = computed(() => {
    return {
        bgColor: theme() === ThemeEnum.light ? '#ffffff' : '#11191f',
        iconColor: theme() === ThemeEnum.dark ? '#fffb00' : '#dfdfdf',
    };
});

export const themeColorsLight = computed(() => {
    return {
        bgColor: theme() === ThemeEnum.light ? '#ffffff' : '#11191f',
        iconColor: theme() === ThemeEnum.light ? '#ff7300' : '#374956',
    };
});
