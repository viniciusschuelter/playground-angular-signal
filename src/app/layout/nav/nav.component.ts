import { Component } from '@angular/core';
import { SwitcherThemeComponent } from '../../components/switcher-theme/switcher-theme.component';

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
                    <app-switcher-theme></app-switcher-theme>
                </li>
            </ul>
        </nav>
    `,
    imports: [SwitcherThemeComponent],
    styles: [
        `
            :host {
                display: block;
                padding: 0.5rem 1.5rem 2rem 1.5rem;
            }
        `,
    ],
})
export class NavComponent {}
