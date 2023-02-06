import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";

export const authStateSelector = (appState: AppState) => appState.authState;
export const authenticatedUserSelector = createSelector(authStateSelector,
    (authState) => authState.authenticatedUser)