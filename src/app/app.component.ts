import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <app-nav></app-nav>
        <main class="container">
            <router-outlet></router-outlet>
        </main>
        <footer class="container-fluid">
            <small>
                Built with
                <a href="https://picocss.com" class="secondary">Pico</a>
                •
                <a href="https://github.com/picocss/examples/tree/master/sign-in/" class="secondary">Source code</a>
            </small>
        </footer>
    `,
    imports: [RouterOutlet, NavComponent],
})
export class AppComponent {}
