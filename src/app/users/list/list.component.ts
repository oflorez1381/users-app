import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import * as usersActions from '../../store/actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading: boolean;
  error: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('users')
      .subscribe( users => {
        this.users = users.users;
        this.loading = users.loading;
        this.error = users.error;
      });
    this.store.dispatch(new usersActions.LoadUsers());
  }

}
