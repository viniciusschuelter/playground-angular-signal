import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {currTheme, theme, themeColorsDark, themeColorsLight, ThemeEnum} from '../../signals/theme.signal';

@Component({
    standalone: true,
    selector: 'app-switcher-theme',
    templateUrl: './switcher-theme.component.html',
    styles: [
        `
            :host .switcher-theme-container {
                display: flex;
                align-items: center;
            }

            :host fieldset {
              margin-left: 8px;
            }
        `,
    ],
    imports: [FormsModule],
})
export class SwitcherThemeComponent {
    theme = theme();
    currTheme = currTheme;
    themeColorsDark = themeColorsDark;
    themeColorsLight = themeColorsLight;
    themeEnum = ThemeEnum;

    setTheme = (currTheme: ThemeEnum): void => theme.update(() => currTheme);
}
