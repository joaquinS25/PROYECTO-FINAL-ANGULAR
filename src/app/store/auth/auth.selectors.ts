import { createSelector } from "@ngrx/store";
import { AppState  } from "../app.reducer";

const selectAuthState = (state: AppState) => state.authState;

export const selectAuthenticatedUser = createSelector(
    selectAuthState,
    (authState) => authState.authenticatedUser
);