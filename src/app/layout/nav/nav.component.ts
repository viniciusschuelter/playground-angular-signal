import { Component } from '@angular/core';
import {currTheme, theme, ThemeEnum} from '../../signals/theme.signal';

@Component({
    selector: 'app-nav',
    standalone: true,
    template: `
        <nav class="container-fluid">
            <ul>
                <li>
                    <a href="./" class="contrast" onclick="event.preventDefault()">
                        <strong>Playground Angular Signal</strong>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <details role="list" dir="rtl">
                        <summary aria-haspopup="listbox" role="link" class="secondary">{{currTheme()}}</summary>
                        <ul role="listbox">
                            <li>
                                <a href="#" data-theme-switcher="light" (click)="setTheme(themeEnum.light)">Light</a>
                            </li>
                            <li><a href="#" data-theme-switcher="dark" (click)="setTheme(themeEnum.dark)">Dark</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </nav>
    `,
})
export class NavComponent {
    theme = theme();
    currTheme = currTheme;
    themeEnum = ThemeEnum;

    setTheme = (currTheme: ThemeEnum): void => theme.update(() => currTheme);
}
