import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {

    const success = this.auth.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.error = 'Usuário ou senha inválidos';
    }
  }
}
