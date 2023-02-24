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
  templateUrl: './login.component.html',
  imports: [FormsModule, ReactiveFormsModule]
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
