import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
    data: User[]
    totalUsers: number;
}

export const initialState: State = {
    data: [],
    totalUsers: 0,
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return {
        ...state,
        data: action.data,
        totalUsers: action.totalUsers,   
      }
  }),
  on(UserActions.loadUsersFailure, (state, action) => state),

);
