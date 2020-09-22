import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static readonly URL = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${UserService.URL}/users?per_page=6&delay=2`)
      .pipe(
        map (response => response['data'] )
      );
  }

  getUserById(id: string){
    return this.http.get(`${UserService.URL}/users/${id}?delay=2`)
      .pipe(
        map(response => response['data'])
      );
  }
}
