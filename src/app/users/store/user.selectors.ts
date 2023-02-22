import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsersArray = createSelector(
  selectUserState,
  (usersState) => usersState.data
);

export const selectTotalUsersNumber = createSelector(
  selectUserState,
  (usersState) => usersState.totalUsers
);