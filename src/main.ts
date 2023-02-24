import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { PlaygroundComponent } from './app/components/playground/playground.component';
import { isLogged } from './app/signals/user.signal';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: 'playground',
          loadComponent: () => PlaygroundComponent,
          // canActivate: [() => isLogged()]
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
