import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `
        <footer class="container-fluid">
            <small class="contrast">copyright 2023 • LLC</small>
        </footer>
    `,
    styles: [
        `
            :host {
                text-align: center;
            }
        `,
    ],
})
export class FooterComponent {}
