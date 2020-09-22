import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import * as userActions from '../../store/actions';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user: User;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.router.params
      .subscribe(params => {
        const id = params.id;
        this.store.dispatch(new userActions.LoadUser(id));
      });
    this.store.select('user').subscribe(userState => {
      this.user = userState.user;
      this.loading = userState.loading;
      this.error = userState.error;
    });
  }
}
