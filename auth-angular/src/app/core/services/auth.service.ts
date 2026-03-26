import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = false;

  constructor(private router: Router) {}

  login(user: string, pass: string) {

    if (user === 'admin' && pass === '123') {
      this.isLogged = true;
      localStorage.setItem('token', 'fake-jwt');
      return true;
    }

    return false;
  }

  isAuthenticated(): boolean {
    return this.isLogged || !!localStorage.getItem('token');
  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
