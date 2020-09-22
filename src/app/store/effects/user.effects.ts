import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as userActions from '../actions';
import {UserService} from '../../services/user.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userActions.LOAD_USER),
    switchMap( (action: userActions.LoadUser) => {
      return this.usersService.getUserById(action.id).pipe(
        map( user => new userActions.LoadUserSuccess(user)),
        catchError(error => of(new userActions.LoadUserFail(error)))
      );
    })
  );
  constructor(private actions$: Actions,
              public usersService: UserService) {}
}
