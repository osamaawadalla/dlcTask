import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  token: any;

  constructor(private router: Router) { }

  canActivate(): boolean {
    this.token = localStorage.getItem('dlc_token');

    if (!this.token) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
