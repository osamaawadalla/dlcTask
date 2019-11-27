import { PostsProService } from './../posts-pro.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: {title:string}[];
  filteredPosts: any[];

  constructor(
    private spinner: NgxSpinnerService,
    private postsPro: PostsProService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();
    this.postsPro.getPosts()
      .subscribe((res: any) => {
        console.log(res);
        this.spinner.hide();
        this.filteredPosts = this.posts = res;
      }, err => {
        console.log(err);
        this.spinner.hide();
      })
  }

  getItems(ev) {    
    this.filteredPosts = (ev) ?
      this.posts.filter(v => v.title.toLowerCase().includes(ev.toLowerCase())) :
      this.posts;
  }

}
