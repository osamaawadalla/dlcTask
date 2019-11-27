import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;

  constructor(private router: Router) { 
    this.token = localStorage.getItem('dlc_token');
  }

  ngOnInit() {
  }

  getToken() {
    this.token = localStorage.getItem('dlc_token');
  }

  logout() {
    localStorage.removeItem('dlc_data');
    localStorage.removeItem('dlc_token');
    this.getToken();

    let l = window.location.href;
    if (l.includes('profile')) {
      this.router.navigate(['/']);
    }
    // let log = document.querySelector('#loginBtn') as HTMLElement
    // log.click();
    // window.history.back();
  }

}
