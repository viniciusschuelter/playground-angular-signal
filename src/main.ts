import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AdvancedComponent } from './app/pages/advanced/advanced.component';
import { DimensionC137Component } from './app/pages/dimension-c137/dimension-c137.component';
import { LoginComponent } from './app/pages/login/login.component';
import { PlaygroundComponent } from './app/pages/playground/playground.component';
import { isLogged } from './app/signals/user.signal';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(
            [
                {
                    path: 'home',
                    loadComponent: () => PlaygroundComponent,
                    canActivate: [() => isLogged()],
                },
                {
                    path: 'dimension-c137',
                    loadComponent: () => DimensionC137Component,
                    canActivate: [() => isLogged()],
                },
                {
                    path: 'advanced',
                    loadComponent: () => AdvancedComponent,
                    canActivate: [() => isLogged()],
                },
                {
                    path: 'login',
                    loadComponent: () => LoginComponent,
                },
                { path: '**', redirectTo: 'login', pathMatch: 'full' },
            ],
            withHashLocation()
        ),
    ],
}).catch((err) => console.error(err));
