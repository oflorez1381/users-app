import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usersActions from '../actions';
import {UserService} from '../../services/user.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(usersActions.LOAD_USERS),
    switchMap( () => {
      return this.usersService.getUsers().pipe(
        map( users => new usersActions.LoadUsersSuccess(users)),
        catchError(error => of(new usersActions.LoadUsersFail(error)))
      );
    })
  );
  constructor(private actions$: Actions,
              public usersService: UserService) {}
}
