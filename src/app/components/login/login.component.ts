import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule, ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User, user } from 'src/app/signals/user.signal';
import {Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <article class="grid">
      <div>
        <hgroup>
          <h1>Sign(al) in</h1>
          <h2>A simple signal to manage your login</h2>
        </hgroup>
        <form [formGroup]="userFormGroup">
          <input
            type="text"
            name="login"
            formControlName="login"
            placeholder="Login"
          />
          <input
            type="password"
            name="password"
            formControlName="password"
            placeholder="Password"
          />
          <button type="submit" class="contrast" (click)="onLogin()">
            Login
          </button>
        </form>
      </div>
      <div></div>
    </article>
  `,
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  userFormGroup: FormGroup = this.fb?.group({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onLogin(): void {
    if (this.userFormGroup.valid) {
      user.update(() => this.userFormGroup.value as User);
      this.goToPlayground();
    }
  }

  goToPlayground(): void {
    this.router.navigateByUrl('playground');
  }
}
