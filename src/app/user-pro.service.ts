import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProService {

  url: any = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUsers() {
    let res = this.http.get(this.url + 'users');
    return res;
  }

  getUserDetails(id) {
    let res = this.http.get(this.url + 'users/' + id);
    return res;
  }

}
