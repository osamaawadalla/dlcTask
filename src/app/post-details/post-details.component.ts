import { PostsProService } from './../posts-pro.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: any;
  id: any;

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private postsPro: PostsProService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getPostDetails(this.id);
    })
  }

  getPostDetails(id) {
    this.spinner.show();
    this.postsPro.getPostDetails(id)
      .subscribe(res => {
        console.log(res);
        this.spinner.hide();
        this.post = res;
      }, err => {
        console.log(err);
        this.spinner.hide();
      })
  }

}
