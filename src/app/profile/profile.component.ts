import { TodoProService } from './../todo-pro.service';
import { PostsProService } from './../posts-pro.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any;
  todo: any[] = [];
  posts: { title: string }[];
  filteredPosts: any[];
  selTodo: any = 'all';
  filteredTodo: any[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private todoPro: TodoProService,
    private postsPro: PostsProService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    let d = localStorage.getItem('dlc_data');
    this.data = JSON.parse(d);
    console.log(this.data);
    this.getUserPosts(this.data.id);
    this.getUserTodo(this.data.id);
  }

  addTodo(title) {
    this.spinner.show();
    this.todoPro.addTodo(this.data.id, title.title)
      .subscribe(res => {
        console.log(res);
        this.spinner.hide();
        this.todo.push(res);
      }, err => {
        console.log(err);
        this.spinner.hide();
      })
  }

  completeTodo(id, i) {
    this.spinner.show();
    this.todoPro.completeTodo(id)
      .subscribe(res => {
        console.log(res);
        this.spinner.hide();
        this.todo[i].completed = true;
      }, err => {
        console.log(err);
        this.spinner.hide();
      })
  }

  getUserTodo(id) {
    this.todoPro.getUserTodo(id)
      .subscribe((res: any) => {
        console.log(res);
        this.filteredTodo = this.todo = res;
      }, err => {
        console.log(err);
      })
  }

  filterTodo(val) {
    console.log(val);

    if (val == 'all') {
      this.filteredTodo = this.todo;
    } else if (val == 'completed') {
      this.filteredTodo = [];
      this.todo.forEach(element => {
        if (element.completed) {
          this.filteredTodo.push(element);
        }
      });
    } else if (val == 'notcompleted') {
      this.filteredTodo = [];
      this.todo.forEach(element => {
        if (!element.completed) {
          this.filteredTodo.push(element);
        }
      });
    }
  }

  getUserPosts(id) {
    this.spinner.show();
    this.postsPro.getUserPosts(id)
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

  logout() {
    localStorage.removeItem('dlc_data');
    localStorage.removeItem('dlc_token');
    let log = document.querySelector('#loginBtn') as HTMLElement
    log.click();
    window.history.back();
  }

}
