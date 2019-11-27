import { UserProService } from './../user-pro.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: {name: string}[];
  filteredUsers: any[];

  constructor(
    private spinner: NgxSpinnerService,
    private userPro: UserProService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.spinner.show();
    this.userPro.getUsers()
      .subscribe((res: any) => {
        console.log(res);
        this.spinner.hide();
        this.filteredUsers = this.users = res;
      }, err => {
        console.log(err);
        this.spinner.hide();
      })
  }

  getItems(ev) {    
    this.filteredUsers = (ev) ?
      this.users.filter(v => v.name.toLowerCase().includes(ev.toLowerCase())) :
      this.users;
  }

}
