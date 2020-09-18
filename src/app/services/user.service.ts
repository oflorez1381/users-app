import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static readonly URL = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${UserService.URL}/users?per_page=6`)
      .pipe(
        map (response => response['data'] )
      );
  }
}
