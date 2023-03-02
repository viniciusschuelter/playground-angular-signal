import { Component } from '@angular/core';
import { SwitcherThemeComponent } from '../../components/switcher-theme/switcher-theme.component';
import {RouterLink} from "@angular/router";
import {isLogged} from "../../signals/user.signal";
import {NgIf} from "@angular/common";

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
            <ul *ngIf="isLogged() || true">
              <li>
                <a [routerLink]="'home'" class="contrast" onclick="event.preventDefault()">
                  <strong>Home</strong>
                </a>
              </li>
              <li>
                <a [routerLink]="'dimension-c137'" class="contrast" onclick="event.preventDefault()">
                  <strong>Dimension-C137</strong>
                </a>
              </li>
              <li>
                <a [routerLink]="'lazy-renderer'" class="contrast" onclick="event.preventDefault()">
                  <strong>Lazy Renderer</strong>
                </a>
              </li>
                <li>
                    <app-switcher-theme></app-switcher-theme>
                </li>
            </ul>
        </nav>
    `,
    imports: [SwitcherThemeComponent, RouterLink, NgIf],
    styles: [
        `
            :host {
                display: block;
                padding: 0.5rem 1.5rem 2rem 1.5rem;
            }
        `,
    ],
})
export class NavComponent {
  isLogged = isLogged;
}
