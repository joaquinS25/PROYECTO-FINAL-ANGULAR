import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "./auth/auth.reducer";

export interface AppState {
    authState: AuthState,
}

export const appReducer: ActionReducerMap<AppState> = {
    authState: authReducer
}