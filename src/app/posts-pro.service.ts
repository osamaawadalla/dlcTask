import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsProService {

  url: any = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPosts() {
    let res = this.http.get(this.url + 'posts');
    return res;
  }

  getUserPosts(id) {
    let res = this.http.get(this.url + 'posts?userId=' + id);
    return res;
  }

  getPostDetails(id) {
    let res = this.http.get(this.url + 'posts/' + id);
    return res;
  }

}
