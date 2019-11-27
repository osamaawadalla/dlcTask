import { UserProService } from './../user-pro.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  id: any;

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private userPro: UserProService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getUserDetails(this.id);
    })
  }

  getUserDetails(id) {
    this.spinner.show();
    this.userPro.getUserDetails(id)
      .subscribe(res => {
        console.log(res);
        this.spinner.hide();
        this.user = res;
      }, err => {
        console.log(err);
        this.spinner.hide();
      })
  }

}
