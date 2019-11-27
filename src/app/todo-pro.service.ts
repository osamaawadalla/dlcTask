import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoProService {

  url: any = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUserTodo(id) {
    let res = this.http.get(this.url + 'todos?userId=' + id);
    return res;
  }

  addTodo(user_id,title) {
    let res = this.http.post(this.url + 'todos', {userId: user_id,title: title, completed: false});
    return res;
  }

  completeTodo(id) {
    let res = this.http.patch(this.url + 'todos/' + id, {completed: true});
    return res;
  }

}
