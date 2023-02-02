import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { setAuthenticatedUser } from "./auth.actions";

export interface AuthState {
    authenticatedUser: User | null;
}

const initialState: AuthState = {
    authenticatedUser: null,
};

export const authReducer = createReducer(
    initialState,
    on(setAuthenticatedUser, (oldState, payLoad) => {
        return {
            ...oldState,
            authenticatedUser: payLoad.authenticatedUser
        }
    })
);   