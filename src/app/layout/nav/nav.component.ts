import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwitcherThemeComponent } from '../../components/switcher-theme/switcher-theme.component';
import {isLogged, user} from '../../signals/user.signal';

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
            <ul *ngIf="isLogged()">
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
                <li (click)="logout()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                    <title>Logout</title>
                    <path d="M3 3h8V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H3z"/>
                    <path d="M19 10l-6-5v4H5v2h8v4l6-5z"/>
                  </svg>
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

    logout = () => {
      localStorage.removeItem('user');
      user.set(null);
    }
}
