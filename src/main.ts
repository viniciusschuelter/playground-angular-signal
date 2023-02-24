import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { PlaygroundComponent } from './app/components/playground/playground.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: 'playground',
          loadComponent: () => PlaygroundComponent,
          canActivate: [() => true],
        },
        {
          path: 'login',
          loadComponent: () => LoginComponent,
        },
        { path: '**', redirectTo: 'playground', pathMatch: 'full' },
      ],
      withHashLocation()
    ),
  ],
}).catch((err) => console.error(err));
