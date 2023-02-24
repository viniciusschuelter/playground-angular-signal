import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header><h1 class="contrast">Playground Angular Signal</h1></header>
    <main class="container">
        <router-outlet></router-outlet>
    </main>
    <footer class="container-fluid">
      <small>Built with <a href="https://picocss.com" class="secondary">Pico</a> • <a href="https://github.com/picocss/examples/tree/master/sign-in/" class="secondary">Source code</a></small>
    </footer>
    `,
  imports: [RouterOutlet],
})
export class AppComponent {}
