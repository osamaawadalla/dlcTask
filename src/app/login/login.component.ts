import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(data) {
    console.log(data);
    data.id = 1;
    let d = JSON.stringify(data);
    localStorage.setItem('dlc_data', d);
    localStorage.setItem('dlc_token', '123456789');
    let log = document.querySelector('#loginBtn') as HTMLElement
    log.click();
    window.history.back();
  }

}
