import { inject, isDevMode } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { loadUsers,loadUsersSuccess, loadUsersFailure,  loadUserSuccess, loadUser } from '../actions/users.action';
import { state } from '@angular/animations';
import { support, Users } from '../interfaces/user';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsersService } from '../services/users.service';

export const initialState: Users = {
 page: 0,
  per_page: 0,
  total: 0,
  total_pages: 0,
  data: [],
  support: {} as support, 
  loading:false,
  error:null
}

// export const reducers: ActionReducerMap<State> = {
//   counter:
// };



export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...users
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(loadUser, (state) => ({ ...state, loading: true })),
  on(loadUserSuccess, (state, { user }) => ({
    ...user
  })),

  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  
);


export const metaReducers: MetaReducer<Users>[] = isDevMode() ? [] : [];



export class UserEffects{

  _UsersService = inject(UsersService);
  actions$ = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(({ pageNumber })=>
        this._UsersService.getUsers(pageNumber).pipe(
            map((users) => loadUsersSuccess({ users })),
            catchError((error) => of(loadUsersFailure({ error })))
          )
    
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(({id}) =>
        this._UsersService.getUserById(id).pipe(
        map((user) => loadUserSuccess({ user })),
            catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );
}
